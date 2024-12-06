import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

router.get("/", async (req, res) => {
  const totalResults = req.query.totalResults;
  const articles = req.query.articles;

  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Finland&aqi=no
`
    );

    res.json({
      articles: response.data.articles,
      totalResults: response.data.totalResults,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
