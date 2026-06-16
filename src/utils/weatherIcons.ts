import iconOvercast from "../assets/images/icon-overcast.webp"
import iconPartlyCloudy from "../assets/images/icon-partly-cloudy.webp"
import iconSunny from "../assets/images/icon-sunny.webp"
import iconDrizzle from "../assets/images/icon-drizzle.webp"
import iconFog from "../assets/images/icon-fog.webp"
import iconSnow from "../assets/images/icon-snow.webp"
import iconRain from "../assets/images/icon-rain.webp"
import iconStorm from "../assets/images/icon-storm.webp"

export const iconMap: { [key: number]: string } = {
    // ☀️ SUNNY / CLEAR
    1000: iconSunny,

    // ⛅ PARTLY CLOUDY
    1003: iconPartlyCloudy,

    // ☁️ CLOUDY / OVERCAST
    1006: iconOvercast, // Cloudy
    1009: iconOvercast, // Overcast

    // 🌫️ FOG / MIST / HAZE / SMOKE
    1030: iconFog, // Mist
    1135: iconFog, // Fog
    1147: iconFog, // Freezing fog
    1012: iconFog, // Haze
    1033: iconFog, // Smoke
    1036: iconFog, // Smoky haze
    1039: iconFog, // Smog
    1042: iconFog, // Severe smog
    1045: iconFog, // Saharan dust
    1048: iconFog, // Dust
    1015: iconFog, // Dust haze
    1018: iconFog, // Blowing dust
    1021: iconFog, // Dust storm
    1024: iconFog, // Sandstorm
    1027: iconFog, // Severe sandstorm

    // 🌦️ DRIZZLE
    1150: iconDrizzle, // Patchy light drizzle
    1153: iconDrizzle, // Light drizzle
    1168: iconDrizzle, // Freezing drizzle
    1171: iconDrizzle, // Heavy freezing drizzle
    1072: iconDrizzle, // Patchy freezing drizzle nearby

    // 🌧️ RAIN / SHOWERS
    1063: iconRain, // Patchy rain nearby
    1180: iconRain, // Patchy light rain
    1183: iconRain, // Light rain
    1186: iconRain, // Moderate rain at times
    1189: iconRain, // Moderate rain
    1192: iconRain, // Heavy rain at times
    1195: iconRain, // Heavy rain
    1198: iconRain, // Light freezing rain
    1201: iconRain, // Moderate or heavy freezing rain
    1240: iconRain, // Light rain shower
    1243: iconRain, // Moderate or heavy rain shower
    1246: iconRain, // Torrential rain shower

    // ⛈️ STORMS / THUNDER
    1087: iconStorm, // Thundery outbreaks nearby
    1273: iconStorm, // Patchy light rain with thunder
    1276: iconStorm, // Moderate or heavy rain with thunder

    // ❄️ SNOW / SLEET / ICE
    1066: iconSnow, // Patchy snow nearby
    1069: iconSnow, // Patchy sleet nearby
    1114: iconSnow, // Blowing snow
    1117: iconSnow, // Blizzard
    1210: iconSnow, // Patchy light snow
    1213: iconSnow, // Light snow
    1216: iconSnow, // Patchy moderate snow
    1219: iconSnow, // Moderate snow
    1222: iconSnow, // Patchy heavy snow
    1225: iconSnow, // Heavy snow
    1237: iconSnow, // Ice pellets
    1249: iconSnow, // Light sleet showers
    1252: iconSnow, // Moderate or heavy sleet showers
    1255: iconSnow, // Light snow showers
    1258: iconSnow, // Moderate or heavy snow showers
    1261: iconSnow, // Light showers of ice pellets
    1264: iconSnow, // Moderate or heavy showers of ice pellets
    1279: iconSnow, // Patchy light snow with thunder
    1282: iconSnow, // Moderate or heavy snow with thunder
}

export const fallbackIcon = iconSunny