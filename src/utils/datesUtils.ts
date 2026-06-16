export function getWeekdayName(dateString: string) : string {
    const date = new Date(dateString.replace(/-/g, "/"))

    return new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date)
}

export function formatFullDate(dateString: string) : string {
    const date = new Date(dateString.replace(/-/g, "/"))

    return new Intl.DateTimeFormat("en-US",
        {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric"
        }).format(date)
}