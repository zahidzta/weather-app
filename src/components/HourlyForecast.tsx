import iconDropdown from "../assets/images/icon-dropdown.svg"
import { useSharedWeather } from "../context/WeatherContext"
import { useState } from "react"
import { iconMap } from "../utils/weatherIcons"
import { getWeekdayName } from "../utils/datesUtils"
import { formatTime } from "../utils/timeUtils"
import { convertTemperature } from "../utils/convertMetricSystem"
import { useSettings } from "../context/SettingContext"
import { useTranslation } from "../hooks/useTranslation"


function Skeleton() {
    return (
        <>
            {Array.from({ length: 7 }).map((_, index) => (
                <div
                    key={index}
                    className="flex items-center h-13 justify-between bg-neutral-800/30 border border-neutral-700/10 rounded-xl px-5 py-3.5 hover:bg-neutral-800/50 transition-colors duration-200"
                ></div>
            ))}
        </>
    )
}

export default function HourlyForecast() {

    const { settings } = useSettings()
    const { data, loading } = useSharedWeather()
    const { t, language } = useTranslation()
    const days = data?.forecast.forecastday ?? []
    const [activeIdx, setActiveIdx] = useState(0)

    const activeDayData = days?.[activeIdx]
    const hourlyWeather = activeDayData?.hour ?? []

    return (
        <div className="w-full">
            <div className="bg-neutral-800/40 border border-neutral-700/30 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-md">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-bold font-display text-neutral-0">
                        {t("hourly_forecast")}
                    </h3>

                    {/* Tuesday Dropdown */}
                    <div className="relative flex items-center">
                        <select
                            className="bg-neutral-800/80 text-neutral-200 text-xs md:text-sm font-sans font-medium rounded-md pl-4 pr-9 py-1.5 border border-neutral-700/50 outline-none cursor-pointer appearance-none select-none"
                            value={activeIdx}
                            onChange={e => setActiveIdx(Number(e.target.value))}
                        >
                            {loading ?
                                <option>-</option>
                                :
                                days?.map((f, index) => (
                                    <option
                                        key={f.date}
                                        value={index}
                                    >
                                        {index === 0 ? t("today") : getWeekdayName(f.date, language)}
                                    </option>
                                ))
                            }

                        </select>
                        <img
                            src={iconDropdown}
                            alt="Dropdown Arrow"
                            className="absolute right-3.5 w-2.5 h-1.5 pointer-events-none opacity-80"
                        />
                    </div>
                </div>

                {/* Hourly Forecast Rows */}
                <div className="flex flex-col gap-3 max-h-120 overflow-y-scroll scrollbar-thumb-white">
                    {loading ?
                        <Skeleton />
                        :
                        hourlyWeather.map((hour, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-neutral-800/30 border border-neutral-700/10 rounded-xl px-5 py-3.5 hover:bg-neutral-800/50 transition-colors duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={iconMap[hour.condition.code ?? 1000]}
                                        alt="Weather Icon"
                                        title={hour.condition.text}
                                        className="w-8 h-8 object-contain select-none pointer-events-none"
                                    />
                                    <span className="text-sm md:text-base font-sans font-medium text-neutral-200">
                                        {formatTime(hour.time)}
                                    </span>
                                </div>
                                <span className="text-sm md:text-base font-sans font-semibold text-neutral-0">
                                    {Math.round(convertTemperature(hour.temp_c, settings.temperature))}°
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}