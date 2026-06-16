export function convertTemperature(celsius: number, unit: 'celsius' | 'fahrenheit'): number {
    if (unit === 'fahrenheit') {
        return (celsius * 9/5) + 32
    }
    return celsius
}

export function convertWindSpeed(kmh: number, unit: 'kmh' | 'mph'): number {
    if (unit === 'mph') {
        return kmh * 0.621371
    }
    return kmh
}

export function convertPrecipitation(mm: number, unit: 'millimeters' | 'inches'): number {
    if (unit === 'inches') {
        return mm * 0.0393701
    }
    return mm
}