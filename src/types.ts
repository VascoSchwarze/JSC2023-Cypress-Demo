export type WeatherData = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_weather: CurrentWeather;
};

type CurrentWeather = {
	temperature: number;
	windspeed: number;
	winddirection: number;
	weathercode: number;
	time: string;
};

export type ErrorData = {
    error: boolean;
    reason: string;
}