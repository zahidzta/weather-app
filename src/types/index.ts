export type Settings = {
    metricSystem: "imperial" | "metric"
    temperature: "celsius" | "fahrenheit"
    windSpeed: "kmh" | "mph"
    precipitation: "millimeters" | "inches"
}

export type WeatherData = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    precip_mm: number;
    condition: { text: string; icon: string; code: number };
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: { text: string; icon: string; code: number };
      };
      hour: Array<{
        time: string; // e.g., "2026-06-04 15:00"
        temp_c: number;
        condition: { text: string; icon: string; code: number };
      }>;
    }>;
  };
}