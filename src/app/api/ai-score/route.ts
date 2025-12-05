import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { product } = await req.json();

    if (!product || !product.title) {
      return NextResponse.json({
        success: false,
        scam_score: null,
        risk_label: "Unavailable",
      });
    }

    // Mock scam score between 0 - 100
    const scamScore = Math.floor(Math.random() * 101);

    // Determine risk label based on score
    let riskLabel = "Low Risk";
    if (scamScore >= 70) riskLabel = "High Risk";
    else if (scamScore >= 40) riskLabel = "Medium Risk";

    return NextResponse.json({
      success: true,
      scam_score: scamScore,
      risk_label: riskLabel,
    });
  } catch (err) {
    console.error("AI mock error:", err);
    return NextResponse.json({
      success: false,
      scam_score: null,
      risk_label: "Unavailable",
    });
  }
}
