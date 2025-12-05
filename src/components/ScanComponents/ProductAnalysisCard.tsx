'use client'

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import ScanNowButton from "../Button/ScanNowButton";
import ShareButton from "../Button/ShareButton";
import { ProductAnalysisCardProps } from "@/types/ProductAnalysisCardProps";
import { useEffect, useRef, useState } from "react";
import ProductAnalysisSkeleton from "../Skeleton/ProductAnalysisSkeleton";


interface Props {
  product: ProductAnalysisCardProps;
}

export default function ProductAnalysisCard({ product }: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(null);
  const [riskLabel, setRiskLabel] = useState<string>("...");

  const {
    title,
    imageUrl,
    rating,
    reviewCount,
    currentPrice,
    crossedPrice,
    discount,
    storeName,
    productLink,
  } = product;

  const safeRating = Number(rating) || 0;
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const safeImageUrl = (imageUrl || '/logo/logo.png').startsWith('http://')
    ? imageUrl!.replace('http://', 'https://')
    : imageUrl || '/logo/logo.png';

      const stableProduct = useRef(product);

  useEffect(() => {
  const scanWithAI = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/ai-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: stableProduct.current }),
      });

      const data = await res.json();

      if (data.success) {
        setAiScore(data.scam_score);
        setRiskLabel(data.risk_label);
      } else {
        setAiScore(null);
        setRiskLabel("Unavailable");
        setError(true);
      }
    } catch (err) {
      setAiScore(null);
      setRiskLabel("Unavailable");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  scanWithAI();
}, []); // run only once
const safeProductLink = productLink || window.location.href;


  // Show skeleton while loading
  if (loading) return <ProductAnalysisSkeleton />;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-xl relative flex flex-col md:flex-row gap-6">
      
      {/* AI Scam Score */}
      <div className={`bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm md:text-base
                      md:absolute md:top-4 md:right-4 md:translate-x-0 md:translate-y-0
                      w-full md:w-auto justify-center mb-4 md:mb-0`}>
        <MdVerifiedUser className="text-xl" />
        {error ? "AI Scan Unavailable" : `AI Scam Score: ${aiScore}% (${riskLabel})`}
      </div>

      {/* Product Image */}
      <div className="flex-shrink-0 w-full md:w-1/3 h-64 relative">
        <Image
          src={safeImageUrl}
          alt={title}
          fill
          className="object-contain rounded-xl border border-gray-200"
          onError={(e) => { e.currentTarget.src = '/logo/logo.png'; }}
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h1>

          {/* Price Section */}
          <div className="flex flex-wrap items-baseline gap-2 mt-2">
            <span className="text-2xl md:text-3xl font-bold text-blue-600">{currentPrice}</span>
            {crossedPrice && (
              <span className="text-lg md:text-xl text-gray-400 line-through">{crossedPrice}</span>
            )}
            {discount && (
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-semibold">{discount}</span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {Array(fullStars).fill(0).map((_, i) => <FaStar key={i} className="text-yellow-400 text-base md:text-xl" />)}
              {hasHalfStar && <FaStar className="text-yellow-400 text-base md:text-xl opacity-50" />}
              {Array(emptyStars).fill(0).map((_, i) => <FaStar key={i + 10} className="text-gray-300 text-base md:text-xl" />)}
            </div>
            <span className="text-sm md:text-lg font-semibold">{safeRating}</span>
            <span className="text-gray-500 text-sm md:text-base">({reviewCount} reviews)</span>
          </div>

          {/* Store Info */}
          <div className="flex items-center gap-2 mt-2">
            <IoStorefrontOutline className="text-gray-600 text-lg" />
            <span className="text-gray-700 font-medium">{storeName || "Become a Seller"}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <ScanNowButton title="View on Flipkart" className="flex-1 text-center text-lg md:text-2xl shadow-lg hover:shadow-xl" link={productLink} />
        <ShareButton
    product={{
        title,
        currentPrice: currentPrice || "",
        crossedPrice: crossedPrice || "",
        discount: discount || "",
        storeName: storeName || "",
        aiScore,
        riskLabel,
        productLink: safeProductLink,
    }}
/>

        </div>
      </div>
    </div>
  );
}
