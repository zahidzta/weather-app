import CurrentWeather from "./components/CurrentWeather"
import DailyForecast from "./components/DailyForecast"
import Header from "./components/Header"
import HourlyForecast from "./components/HourlyForecast"
import SearchBar from "./components/SearchBar"
import { useSharedWeather } from "./context/WeatherContext"
import APIError from "./components/APIError"
import { useTranslation } from "./hooks/useTranslation"

function App() {
  const { error } = useSharedWeather()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-full flex justify-center pb-12 selection:bg-blue-500 selection:text-white">
      <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col gap-6">
        <Header />
        
        {error ? (
          <APIError onRetry={() => window.location.reload()} />
        ) : (
          <>
            <h1 className="text-3xl md:text-5xl font-bold font-display text-neutral-0 text-center mt-10 mb-4 tracking-tight leading-tight max-w-2xl mx-auto">
              {t("hows_sky")}
            </h1>
            <SearchBar />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-6 items-start">
              <div className="lg:col-span-2 flex flex-col gap-6">
                <CurrentWeather />
                <DailyForecast />
              </div>
              <div className="lg:col-span-1">
                <HourlyForecast />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
