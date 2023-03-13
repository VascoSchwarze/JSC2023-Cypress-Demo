import { useState } from "react";
import "./App.css";
import { ErrorData, WeatherData } from "./types";

// Live-Demo Wetter-App
function App() {
	const [lat, setLat] = useState("51.05");
	const [lon, setLon] = useState("13.75");

	const [temperature, setTemperature] = useState<number | null>(null);
	const [weatherCode, setWeatherCode] = useState<number | null>(null);

	const [errorString, setErrorString] = useState<string | null>(null);

	const setWeatherData = (data: WeatherData) => {
		setTemperature(data.current_weather.temperature);
		setWeatherCode(data.current_weather.weathercode);
		setErrorString(null);
	};

	const setErrorData = (error: ErrorData) => {
		setErrorString(error.reason);

		setTemperature(null);
		setWeatherCode(null);
	};

	return (
		<div className="App">
			<div className="input-section">
				<h1>Weather</h1>
				<label htmlFor="lat-input">Latitude</label>
				<input
					id="lat-input"
					data-testid="lat-input"
					value={lat}
					onChange={(e) => setLat(e.target.value)}
				/>
				<label htmlFor="lon-input">Longitude</label>
				<input
					id="lon-input"
					data-testid="lon-input"
					value={lon}
					onChange={(e) => setLon(e.target.value)}
				/>
				<button
					data-testid="submit-btn"
					onClick={() => {
						fetchWeatherData(Number(lat), Number(lon), setWeatherData, setErrorData);
					}}
					disabled={isNaN(Number(lat)) || isNaN(Number(lon))}
				>
					Search
				</button>
			</div>
			<div data-testid="weather-section" className="weather-section">
				{errorString ? <Error error={errorString} /> : <></>}
				{temperature != null && weatherCode !== null ? (
					<>
						<Temperature temperature={temperature} />
						<WeatherIcon weatherCode={weatherCode} />
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

function fetchWeatherData(
	lat: number,
	lon: number,
	onSuccess: (data: WeatherData) => void,
	onError: (error: ErrorData) => void
) {
	fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
		.then((response) => response.json())
		.then((data: WeatherData | ErrorData) => {
			console.log(data);
			if ("error" in data) {
				onError(data);
			} else {
				onSuccess(data);
			}
		});
}

export default App;

function Error({ error }: { error: string }) {
	return (
		<div className="error">
			<p data-testid="error">{error}</p>
		</div>
	);
}

function Temperature({ temperature }: { temperature: number }) {
	return (
		<div className="temperature">
			<p data-testid="temperature">{temperature} °C</p>
		</div>
	);
}

function WeatherIcon({ weatherCode }: { weatherCode: number }) {
	return (
		<div className="weather-icon">
			{weatherCode === 0 ? <p data-testid="weather-icon">☀️</p> : <></>}
			{weatherCode > 0 && weatherCode < 4 ? <p data-testid="weather-icon">☁️</p> : <></>}
			{weatherCode === 45 || weatherCode === 48 ? <p data-testid="weather-icon">🌫️</p> : <></>}
			{weatherCode > 3 ? <p data-testid="weather-icon">🌧️</p> : <></>}
		</div>
	);
}

// Demo für Präsentation

// function App() {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<div className="App">
// 			<div className="counter-section">
// 				<h1>Counter</h1>
// 				<p data-testid="counter">{count}</p>
// 			</div>
// 			<button data-testid="counter-btn" onClick={() => setCount((count) => count + 1)}>
// 				Click me!
// 			</button>
// 		</div>
// 	);
// }

