"use client";

import { useEffect, useState } from "react";
import AnalysisCard from "../ScanComponents/AnalysisCard";
import { AnalysisCardProps } from "@/types/AnalysisCardProps";
import AnalysisCardSkeleton from "../Skeleton/AnalysisSkeletonLoader";

export default function RiskAnalysisReport() {
  const [aiData, setAiData] = useState<AnalysisCardProps | null>(null);
  const [loading, setLoading] = useState(true); // start with loading
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAiData = async () => {
      setError(null);

      try {
        const response = await fetch("/api/ai-analysis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            product: {
              title: "Sample Product",
              currentPrice: "₹999",
              crossedPrice: "₹1999",
              discount: "50% OFF",
              rating: "4.5",
              reviewCount: "150",
              storeName: "Example Store",
              verifiedStore: true,
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch AI analysis");
        }

        const data: AnalysisCardProps = await response.json();
        setAiData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAiData();
  }, []);

  return (
    <section className="mb-12">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          AI-Powered Analysis
        </h2>
        <p className="text-xl text-gray-600">
          Our AI scans 15+ risk factors in seconds
        </p>

        <div className="max-w-7xl mx-auto mt-12">
          {loading && <AnalysisCardSkeleton />}
          {error && <p className="text-red-600">{error}</p>}
          {aiData && !loading && !error && (
            <AnalysisCard
              reviewScore={aiData.reviewScore ?? 0}
              repeatedPatterns={aiData.repeatedPatterns ?? []}
              sellerTrust={aiData.sellerTrust ?? "Not provided"}
              sellerAge={aiData.sellerAge ?? "Not provided"}
              complaintHistory={aiData.complaintHistory ?? "Not provided"}
              refundRate={aiData.refundRate ?? "0%"}
              deliveryIssues={aiData.deliveryIssues ?? "Minimal"}
              productQualityScore={aiData.productQualityScore ?? 0}
              qualityNotes={(aiData.qualityNotes ?? []).map((text) => ({
                text,
                isPositive: !text.toLowerCase().includes("discount"), // example: mark discount-related notes as negative
              }))}
            />
          )}
        </div>
      </div>
    </section>
  );
}
