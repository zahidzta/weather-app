import { useSettings } from "../context/SettingContext"
import { translations } from "../translations"

export function useTranslation() {
    const { settings } = useSettings()
    const t = (key: keyof typeof translations.en) => {
        const lang = settings.language || 'es'
        return translations[lang as keyof typeof translations]?.[key] || key
    }
    return { t, language: settings.language || 'es' }
}
