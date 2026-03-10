import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

router.post("/generate", async (req, res) => {
  try {
    const { role } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate 5 interview questions for ${role}`
    });

    res.json({ questions: response.text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI generation failed" });
  }
});

export default router;