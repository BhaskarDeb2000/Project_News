import express from "express";
import cors from "cors";

import Businessrouter from "./Routes/BusinessRoute.js";
import WeatherWidget from "./Routes/WeatherWidget.js";
import Techrouter from "./Routes/TechCrunchRoute.js";

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());
app.use("/Homepage/Business", Businessrouter);
app.use("/Homepage/IT", Techrouter);
app.use("/weatherForeCast", WeatherWidget);

app.listen(PORT, () => {
  console.log(`Server is Running: http://localhost:${PORT}/`);
});
