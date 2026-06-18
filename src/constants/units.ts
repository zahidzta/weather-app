import type { Settings } from "../types"

export const METRIC_SETTINGS: Settings = {
    metricSystem: "metric",
    temperature: "celsius",
    windSpeed: "kmh",
    precipitation: "millimeters",
    language: "es"
}

export const IMPERIAL_SETTINGS: Settings = {
    metricSystem: "imperial",
    temperature: "fahrenheit",
    windSpeed: "mph",
    precipitation: "inches",
    language: "es"
}