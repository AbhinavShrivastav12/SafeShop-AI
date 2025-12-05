import { NextResponse } from "next/server";
import OpenAI from "openai";
import { AnalysisCardProps } from "@/types/AnalysisCardProps";

export async function POST(req: Request) {
  try {
    const { product } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      throw new Error("Missing OpenAI API Key");
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // 🧠 AI Prompt — returns only JSON that matches AnalysisCardProps
    const prompt = `
You are an AI that evaluates online products for trust, fake reviews, seller risk, and product quality.

Return ONLY a valid JSON object with the following structure:

{
  "reviewScore": number (0-100),
  "repeatedPatterns": string[],
  "sellerTrust": string,
  "sellerAge": string,
  "complaintHistory": string,
  "refundRate": string,
  "deliveryIssues": string,
  "productQualityScore": number (0-10),
  "qualityNotes": string[]
}

Product Data:
- Title: ${product.title}
- Price: ${product.currentPrice}
- Crossed Price: ${product.crossedPrice}
- Discount: ${product.discount}
- Rating: ${product.rating}
- Review Count: ${product.reviewCount}
- Store Name: ${product.storeName}
- Verified Store: ${product.verifiedStore}
`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    const text = response.output_text ?? "";

    // Default safe values
    let result: AnalysisCardProps = {
      reviewScore: 75,
      repeatedPatterns: [],
      sellerTrust: "Moderate",
      sellerAge: "Unknown",
      complaintHistory: "Unknown",
      refundRate: "Unknown",
      deliveryIssues: "Unknown",
      productQualityScore: 7.0,
      qualityNotes: [],
    };

    // Extract JSON from AI output safely
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        result = { ...result, ...parsed };
      }
    } catch (err) {
      console.warn("AI JSON parse error:", err);
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("AI Analysis API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong while analyzing product." },
      { status: 500 }
    );
  }
}
