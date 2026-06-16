import logo from '../assets/images/logo.svg'
import iconDropdown from '../assets/images/icon-dropdown.svg'
import iconUnits from '../assets/images/icon-units.svg'
import iconCheckmark from '../assets/images/icon-checkmark.svg'
import { useState, useEffect, useRef } from 'react'
import { useSettings } from '../context/SettingContext'

export default function Header() {

    const { settings, updateSettings } = useSettings()
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!open) return

        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [open])

    const handleSwitch = () => {
        if (settings.metricSystem === "imperial") {
            updateSettings('metricSystem', "metric")
        } else {
            updateSettings("metricSystem", "imperial")
        }
    }

    return (
        <header className="flex items-center justify-between w-full py-6">
            <img src={logo} alt="Weather Now Logo" className="h-10" />
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setOpen(!open)}
                    className={`flex items-center gap-2 bg-neutral-800/80 border border-neutral-700/50 rounded-md px-4 py-2 hover:bg-neutral-700/80 active:scale-95 transition-all duration-200 cursor-pointer ${open ? 'ring-1 ring-white/90 border-white/90' : ''
                        }`}
                >
                    <img src={iconUnits} alt="Units Icon" className="w-4 h-4" />
                    <span className="text-neutral-200 text-sm font-sans font-medium select-none">Units</span>
                    <img
                        src={iconDropdown}
                        alt="Dropdown Icon"
                        className={`w-3 h-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    />
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 w-64 bg-[#141226]/95 border border-neutral-700/50 rounded-xl shadow-2xl p-3 z-50 flex flex-col gap-3 backdrop-blur-md">
                        {/* Switch to Imperial Button */}
                        <button
                            className="w-full text-left px-3 py-2 bg-transparent border border-white/10 hover:border-white/20 rounded-lg text-neutral-200 text-sm font-sans font-medium transition-colors cursor-pointer select-none"
                            onClick={handleSwitch}
                        >
                            {settings.metricSystem === 'metric' ? 'Switch to Imperial' : 'Switch to Metric'}
                        </button>

                        {/* Temperature section */}
                        <div className="flex flex-col gap-1">
                            <span className="text-neutral-500 text-xs px-3 py-1 font-sans font-medium select-none">Temperature</span>
                            <div className="flex flex-col gap-0.5">
                                <div 
                                    onClick={() => updateSettings('temperature', 'celsius')}
                                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-sans font-medium cursor-pointer select-none transition-colors duration-150 ${
                                        settings.temperature === 'celsius'
                                            ? 'bg-neutral-800/60 text-neutral-200'
                                            : 'text-neutral-400 hover:bg-neutral-800/30'
                                    }`}
                                >
                                    <span>Celsius (°C)</span>
                                    {settings.temperature === 'celsius' && (
                                        <img src={iconCheckmark} alt="Checked" className="w-3.5 h-3.5" />
                                    )}
                                </div>
                                <div 
                                    onClick={() => updateSettings('temperature', 'fahrenheit')}
                                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-sans font-medium cursor-pointer select-none transition-colors duration-150 ${
                                        settings.temperature === 'fahrenheit'
                                            ? 'bg-neutral-800/60 text-neutral-200'
                                            : 'text-neutral-400 hover:bg-neutral-800/30'
                                    }`}
                                >
                                    <span>Fahrenheit (°F)</span>
                                    {settings.temperature === 'fahrenheit' && (
                                        <img src={iconCheckmark} alt="Checked" className="w-3.5 h-3.5" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <hr className="border-t border-neutral-800/80 my-0.5" />

                        {/* Wind Speed section */}
                        <div className="flex flex-col gap-1">
                            <span className="text-neutral-500 text-xs px-3 py-1 font-sans font-medium select-none">Wind Speed</span>
                            <div className="flex flex-col gap-0.5">
                                <div 
                                    onClick={() => updateSettings('windSpeed', 'kmh')}
                                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-sans font-medium cursor-pointer select-none transition-colors duration-150 ${
                                        settings.windSpeed === 'kmh'
                                            ? 'bg-neutral-800/60 text-neutral-200'
                                            : 'text-neutral-400 hover:bg-neutral-800/30'
                                    }`}
                                >
                                    <span>km/h</span>
                                    {settings.windSpeed === 'kmh' && (
                                        <img src={iconCheckmark} alt="Checked" className="w-3.5 h-3.5" />
                                    )}
                                </div>
                                <div 
                                    onClick={() => updateSettings('windSpeed', 'mph')}
                                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-sans font-medium cursor-pointer select-none transition-colors duration-150 ${
                                        settings.windSpeed === 'mph'
                                            ? 'bg-neutral-800/60 text-neutral-200'
                                            : 'text-neutral-400 hover:bg-neutral-800/30'
                                    }`}
                                >
                                    <span>mph</span>
                                    {settings.windSpeed === 'mph' && (
                                        <img src={iconCheckmark} alt="Checked" className="w-3.5 h-3.5" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <hr className="border-t border-neutral-800/80 my-0.5" />

                        {/* Precipitation section */}
                        <div className="flex flex-col gap-1">
                            <span className="text-neutral-500 text-xs px-3 py-1 font-sans font-medium select-none">Precipitation</span>
                            <div className="flex flex-col gap-0.5">
                                <div 
                                    onClick={() => updateSettings('precipitation', 'millimeters')}
                                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-sans font-medium cursor-pointer select-none transition-colors duration-150 ${
                                        settings.precipitation === 'millimeters'
                                            ? 'bg-neutral-800/60 text-neutral-200'
                                            : 'text-neutral-400 hover:bg-neutral-800/30'
                                    }`}
                                >
                                    <span>Millimeters (mm)</span>
                                    {settings.precipitation === 'millimeters' && (
                                        <img src={iconCheckmark} alt="Checked" className="w-3.5 h-3.5" />
                                    )}
                                </div>
                                <div 
                                    onClick={() => updateSettings('precipitation', 'inches')}
                                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-sans font-medium cursor-pointer select-none transition-colors duration-150 ${
                                        settings.precipitation === 'inches'
                                            ? 'bg-neutral-800/60 text-neutral-200'
                                            : 'text-neutral-400 hover:bg-neutral-800/30'
                                    }`}
                                >
                                    <span>Inches (in)</span>
                                    {settings.precipitation === 'inches' && (
                                        <img src={iconCheckmark} alt="Checked" className="w-3.5 h-3.5" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}