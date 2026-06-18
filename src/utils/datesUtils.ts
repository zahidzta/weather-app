export function getWeekdayName(dateString: string, lang: string = "es") : string {
    const date = new Date(dateString.replace(/-/g, "/"))
    const locale = lang === "es" ? "es-ES" : "en-US"
    const name = new Intl.DateTimeFormat(locale, {weekday: "long"}).format(date)
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export function formatFullDate(dateString: string, lang: string = "es") : string {
    const date = new Date(dateString.replace(/-/g, "/"))
    const locale = lang === "es" ? "es-ES" : "en-US"
    const name = new Intl.DateTimeFormat(locale,
        {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric"
        }).format(date)
    return name.charAt(0).toUpperCase() + name.slice(1)
}