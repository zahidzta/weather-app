import BackgroundDesktop from "../assets/images/bg-today-large.svg"
import { useSharedWeather } from "../context/WeatherContext"
import { formatFullDate } from "../utils/datesUtils"
import { iconMap } from "../utils/weatherIcons"
import { useSettings } from "../context/SettingContext"
import { convertTemperature, convertWindSpeed, convertPrecipitation } from "../utils/convertMetricSystem"
export default function CurrentWeather() {

    const { data, loading } = useSharedWeather()
    const { settings } = useSettings()

    const weatherStats = [
        { label: 'Feels Like', value: !loading && data ? `${Math.round(convertTemperature(data.current.feelslike_c, settings.temperature))}°${settings.temperature === 'celsius' ? 'C' : 'F'}` : '--' },
        { label: 'Humidity', value: !loading && data ? `${data.current.humidity}%` : '--' },
        { label: 'Wind', value: !loading && data ? `${Math.round(convertWindSpeed(data.current.wind_kph, settings.windSpeed) * 10) / 10} ${settings.windSpeed === 'kmh' ? 'km/h' : 'mph'}` : '--' },
        { label: 'Precipitation', value: !loading && data ? `${Math.round(convertPrecipitation(data.current.precip_mm, settings.precipitation) * 10) / 10} ${settings.precipitation === 'millimeters' ? 'mm' : 'in'}` : '--' }
    ]

    return (
        <div className="flex flex-col gap-5 w-full">
            {/* Today's Weather Card */}
            <div className="relative overflow-hidden rounded-2xl w-full p-8 bg-neutral-800/60 border border-neutral-700/30 md:p-12 shadow-lg min-h-45 md:min-h-55 flex items-center">

                {loading ?
                    <div className="m-auto">
                        {/* Bouncing Dots Wrapper */}
                        <div className="flex space-x-2 justify-center">
                            {/* Dot 1 */}
                            <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            {/* Dot 2 */}
                            <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            {/* Dot 3 */}
                            <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce"></span>
                        </div>

                        {/* Text Label */}
                        <span className="text-sm font-sans font-medium text-neutral-300 tracking-wide select-none">
                            Loading...
                        </span>
                    </div>
                    :
                    <>
                        {/* Background Image */}

                        <img
                            src={BackgroundDesktop}
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
                        />

                        {/* Content Overlay */}
                        <div className="relative z-10 w-full flex flex-row items-center justify-between">
                            <div>
                                <h2 className="text-xl md:text-3xl font-bold font-display text-neutral-0">
                                    {`${data?.location.name}, ${data?.location.country}`}
                                </h2>
                                <p className="text-neutral-200/80 text-xs md:text-sm font-sans mt-1">
                                    {formatFullDate(data?.forecast.forecastday[0].date ?? "2000-01-01")}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 md:gap-5">
                                <img
                                    src={iconMap[data?.current.condition.code ?? 1000]}
                                    alt={data?.current.condition.text}
                                    className="w-12 h-12 md:w-20 md:h-20 object-contain"
                                />
                                <span className="text-5xl md:text-7xl font-bold font-display text-neutral-0 leading-none">
                                    {`${Math.round(convertTemperature(data?.current.temp_c ?? 0, settings.temperature))}°`}
                                </span>
                            </div>
                        </div>
                    </>

                }


            </div>

            {/* Weather Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {weatherStats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-neutral-800/60 border border-neutral-700/30 rounded-xl p-5 md:p-6 flex flex-col gap-2 shadow-sm"
                    >
                        <span className="text-xs md:text-sm text-neutral-300 font-sans font-medium">
                            {stat.label}
                        </span>
                        <span className="text-2xl md:text-3xl font-semibold text-neutral-0 font-sans">
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}