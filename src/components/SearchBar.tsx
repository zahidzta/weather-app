import { useState } from "react"
import SearchIcon from "../assets/images/icon-search.svg"
import { useSharedWeather } from "../context/WeatherContext"

export default function SearchBar() {

    const { searchCity } = useSharedWeather()
    const [search, setSearch] = useState("")

    return (
        <div className="flex items-center gap-3 w-full max-w-xl mx-auto py-4">
            <div className="flex-1 flex items-center gap-3 bg-neutral-800/60 border border-neutral-700/30 rounded-md px-4 py-2.5 focus-within:border-neutral-500/50 transition-all duration-200">
                <img src={SearchIcon} alt="search" className="w-5 h-5 opacity-60" />
                <input
                    type="text"
                    placeholder="Search for a place..."
                    className="w-full bg-transparent border-none outline-none text-neutral-0 placeholder-neutral-300/50 text-sm font-sans"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-neutral-0 font-sans font-semibold text-sm px-6 py-2.5 rounded-md transition-all duration-200 cursor-pointer select-none"
                onClick={() => searchCity(search)}
            >
                Search
            </button>
        </div>
    )
}