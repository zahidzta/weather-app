import { createContext, useContext } from "react"
import type { WeatherData } from "../types"
import { useWeather } from "../hooks/useWeather"

type WeatherContextType = {
    data: WeatherData | null
    loading: boolean
    error: string | null
    searchCity: (city: string) => Promise<void> 
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

export function WeatherProvider({children} : {children: React.ReactNode}) {
    const weather = useWeather("Aguascalientes")

    return (
        <WeatherContext.Provider value={weather}>
            {children}
        </WeatherContext.Provider>
    )
}

export function useSharedWeather() {
    const context = useContext(WeatherContext)
    if (!context) throw new Error('useSharedWeather must be used within a WeatherProvider')
    return context
}