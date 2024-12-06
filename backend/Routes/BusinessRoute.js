import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const Businessrouter = express.Router();
const NEWS_API_KEY = process.env.NEWS_API_KEY;

Businessrouter.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`
    );

    // Destructuring in backend and sending the processed data to frontend
    const formattedArticles = response.data.articles.map(article => ({
      id: article.source.id || null,
      author: article.author || "Unknown",
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      content: article.content,
    }));

    // Send formatted articles and total results
    res.json({
      articles: formattedArticles,
      totalResults: response.data.totalResults,
    });
  } catch (error) {
    console.error("Error fetching business news:", error);
    res.status(500).json({ error: "Failed to fetch business news" });
  }
});

export default Businessrouter;
