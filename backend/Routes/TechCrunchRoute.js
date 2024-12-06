import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const Techrouter = express.Router();
const NEWS_API_KEY = process.env.NEWS_API_KEY;

Techrouter.get("/", async (req, res) => {
  // const totalResults = req.query.totalResults;
  // const articles = req.query.articles;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`
    );
    // Destructuring starts
    const TechNews = response.data.articles.map(article => ({

      id: article.source.id || null, // Fallback if id goes missing
      author: article.author || "Unknown",
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      content: article.content,

    }));

    // Send formatted articles and total results
    res.json({
      articles: TechNews,
      totalResults: response.data.totalResults,
    });
  } catch (error) {
    console.error("Error fetching tech news:", error);
    res.status(500).json({ error: "Failed to fetch tech news" });

  }
});

export default Techrouter;













