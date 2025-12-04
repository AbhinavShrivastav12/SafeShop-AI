'use client'

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdVerified, MdVerifiedUser } from "react-icons/md";
import ScanNowButton from "../Button/ScanNowButton";
import ShareButton from "../Button/ShareButton";
import { ProductAnalysisCardProps } from "@/types/ProductAnalysisCardProps";

export default function ProductAnalysisCard({
  imageUrl,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  storeName,
  verifiedStore = false,
  aiScamScore,
  riskLabel = "Low Risk",
  productLink,
}: ProductAnalysisCardProps) {
  const safeRating = typeof rating === "number" && !isNaN(rating)
    ? Math.min(Math.max(rating, 0), 5)
    : 0;

  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pt-32">
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 relative overflow-hidden">
        {/* AI Scam Score */}
        <div className="absolute top-6 right-6">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <MdVerifiedUser className="text-xl" />
            <span className="font-bold">AI Scam Score: {aiScamScore}%</span>
            <span className="text-sm opacity-90">({riskLabel})</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Product Image */}
          <div className="w-full h-80">
            <Image
              src={imageUrl || '/logo/logo.png'}
              alt={title || 'Product Image'}
              height={100}
              width={100}
              className="w-full h-full object-contain rounded-xl border border-gray-200"
            />
          </div>

          {/* Product Info */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h1>

            {/* Price Section */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-blue-600">${price}</span>
              {originalPrice && (
                <span className="text-xl text-gray-400 line-through">${originalPrice}</span>
              )}
              {discount && (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {discount} OFF
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array(fullStars).fill(0).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                  {hasHalfStar && <FaStar className="text-yellow-400 text-xl opacity-50" />}
                  {Array(emptyStars).fill(0).map((_, i) => (
                    <FaStar key={i} className="text-gray-300 text-xl" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{safeRating}</span>
                <span className="text-gray-500">({reviewCount || 0} reviews)</span>
              </div>
            </div>

            {/* Store Info */}
            <div className="flex items-center gap-2 pt-2">
              <IoStorefrontOutline className="text-gray-600 text-lg" />
              <span className="text-gray-700 font-medium">{storeName}</span>
              {verifiedStore && <MdVerified className="text-blue-500 text-lg" />}
            </div>

            {/* Buttons */}
            <div className="pt-4 flex gap-4">
              <ScanNowButton
                title="View on Flipkart"
                className="flex-1 shadow-lg hover:shadow-xl"
                link={productLink}
              />
              <ShareButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
