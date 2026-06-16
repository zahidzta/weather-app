export function formatTime(timeString: string): string {
    const timeOnly = timeString.includes(' ') ? timeString.split(' ')[1] : timeString
    const [hourStr] = timeOnly.split(':')
    let hour = parseInt(hourStr, 10)
    const ampm = hour >= 12 ? 'PM' : 'AM'

    hour = hour % 12;
    hour = hour ? hour : 12

    return `${hour} ${ampm}`;
}