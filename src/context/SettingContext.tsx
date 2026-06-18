import { createContext, useContext, useState, useEffect } from "react"
import type { Settings } from "../types"
import { METRIC_SETTINGS, IMPERIAL_SETTINGS } from "../constants/units"

type SettingContextType = {
    settings: Settings
    updateSettings: <K extends keyof Settings>(key: K, value: Settings[K]) => void
}

const SettingsContext = createContext<SettingContextType | null>(null)
const STORAGE_KEY = "weather-app-settings"

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [settings, setSettings] = useState<Settings>(METRIC_SETTINGS)
    useEffect(() => {
        const savedSettings = localStorage.getItem(STORAGE_KEY)
        if (savedSettings) {
            try {
                const parsedSettings = JSON.parse(savedSettings)
                if (!parsedSettings.language) {
                    parsedSettings.language = "es"
                }
                setSettings(parsedSettings)
            } catch (e) {
                console.error("Failed to parse saved settings:", e)
                localStorage.removeItem(STORAGE_KEY)
            }
        }
    }, [])

    const updateSettings = <K extends keyof Settings>(key: K, value: Settings[K]) => {
        let newSettings: Settings

        if (key === "metricSystem") {
            const baseSettings = value === "metric" ? METRIC_SETTINGS : IMPERIAL_SETTINGS
            newSettings = { ...baseSettings, language: settings.language || "es" }
        } else {
            newSettings = { ...settings, [key]: value }
        }
        setSettings(newSettings)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings))
    }

    return (
        <SettingsContext.Provider value={{ settings, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    const context = useContext(SettingsContext)
    if (!context) throw new Error("useSettings must be used within SettingsProvider")
    return context
}