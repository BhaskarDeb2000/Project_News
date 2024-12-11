import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Widget from "../components/Weather/widget";
import { CircularProgress } from "@mui/material";

const WeatherApp = () => {
	const [weather, setWeather] = useState([]);
	const [city, setCity] = useState("Helsinki");
	const [loading, setLoading] = useState([true]);

	const fetchWeatherData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5002/weather?city=${city}`
			);
			setWeather(response.data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);
			setLoading(false);
		}
	};

	const SubmitButton = () => {
		fetchWeatherData();
	};

	const cityUpdate = (e) => {
		e.preventDefault();
		setCity(e.target.value);
	};

	useEffect(() => {
		fetchWeatherData(city);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			{loading ? (
				<CircularProgress sx={{ color: "#aa3030" }} />
			) : (
				<Widget
					key={weather.cityName}
					cityName={weather.cityName}
					temperature={weather.temperature}
					description={weather.description}
					iconUrl={weather.iconUrl}
					submitButton={SubmitButton}
					click={cityUpdate}
				/>
			)}
		</div>
	);
};

export default WeatherApp;

