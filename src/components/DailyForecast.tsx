import { useSettings } from "../context/SettingContext"
import { useSharedWeather } from "../context/WeatherContext"
import { convertTemperature } from "../utils/convertMetricSystem"
import { getWeekdayName } from "../utils/datesUtils"
import { iconMap } from "../utils/weatherIcons"
import { useTranslation } from "../hooks/useTranslation"

function Skeleton() {
    return (
        <>
            {Array.from({ length: 7 }).map((_, index) => (
                <div
                    key={index}
                    className="bg-neutral-800/60 border border-neutral-700/30 rounded-xl py-5 px-3 flex flex-col items-center gap-4 text-center shadow-sm h-34.5"
                >

                    <div className="h-4 w-12 bg-neutral-700/60 rounded" />
                    <div className="w-10 h-10 bg-neutral-700/60 rounded-full" />
                    <div className="flex gap-2 w-full justify-center">
                        <div className="h-4 w-6 bg-neutral-700/60 rounded" />
                        <div className="h-4 w-6 bg-neutral-700/40 rounded" />
                    </div>
                </div>
            ))}
        </>

    )
}

export default function DailyForecast() {
    const { data, loading } = useSharedWeather()
    const { settings } = useSettings()
    const { t, language } = useTranslation()

    const DAILYWEATHER = data?.forecast.forecastday ?? []

    return (
        <div className="w-full py-2">
            <h3 className="text-lg md:text-xl font-bold font-display text-neutral-0 mb-4">
                {t("daily_forecast")}
            </h3>

            {/* Scrollable container for mobile responsiveness */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-none">
                <div className="grid grid-cols-7 gap-3 min-w-175 lg:min-w-0">
                    {loading ?
                        <Skeleton /> :
                        DAILYWEATHER.map((day, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800/60 border border-neutral-700/30 rounded-xl py-5 px-3 flex flex-col items-center gap-4 text-center shadow-sm"
                            >
                                <span className="text-sm font-sans font-medium text-neutral-300">
                                    {index === 0 ? t("today") : getWeekdayName(day.date, language)}
                                </span>
                                <img
                                    src={iconMap[day.day.condition.code ?? 1000]}
                                    alt={day.day.condition.text}
                                    className="w-10 h-10 object-contain select-none pointer-events-none"
                                />
                                <div className="flex items-center gap-2 justify-center">
                                    <span className="text-sm font-sans font-semibold text-neutral-0">
                                        {Math.round(convertTemperature(day.day.maxtemp_c, settings.temperature))}°
                                    </span>
                                    <span className="text-sm font-sans font-normal text-neutral-300">
                                        {Math.round(convertTemperature(day.day.mintemp_c, settings.temperature))}°
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}