import { useEffect, useState } from "react"
import type { WeatherData } from "../types"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json"

export function useWeather(defaultCity: string) {
    const [data, setData] = useState<WeatherData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchWeather = async (city: string) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}&days=3&aqi=no`)
            if (!response.ok) {
                throw new Error("City not found. Please try again")
            }

            const jsonData: WeatherData = await response.json()
            setData(jsonData)
        } catch (err : any) {
            setError(err.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (API_KEY) {
            fetchWeather(defaultCity)
        } else {
            setError("APY key missing inside .env configuration file")
            setLoading(false)
        }
    }, [defaultCity])

    return {data, loading, error, searchCity: fetchWeather}
}