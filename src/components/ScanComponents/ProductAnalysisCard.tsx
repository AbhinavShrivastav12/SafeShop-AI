'use client'

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import ScanNowButton from "../Button/ScanNowButton";
import ShareButton from "../Button/ShareButton";

interface ProductData {
  title: string;
  imageUrl: string;
  rating: string;
  reviewCount: string;
  currentPrice: string;
  crossedPrice?: string | null;
  discount?: string | null;
  storeName?: string | null;
  productLink?: string;
}

interface Props {
  product: ProductData;
  aiScamScore?: number;
  riskLabel?: string;
}

export default function ProductAnalysisCard({ product, aiScamScore = 90, riskLabel = "Low Risk" }: Props) {
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-xl relative">
      {/* AI Scam Score */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
        <MdVerifiedUser className="text-xl" />
        <span className="font-bold">AI Scam Score: {aiScamScore}%</span>
        <span className="text-sm opacity-90">({riskLabel})</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-64 relative">
          <Image
            src={imageUrl || '/logo/logo.png'}
            alt={title}
            fill
            className="object-contain rounded-xl border border-gray-200"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

          {/* Price Section */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-blue-600">{currentPrice}</span>
            {crossedPrice && (
              <span className="text-xl text-gray-400 line-through">{crossedPrice}</span>
            )}
            {discount && (
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                {discount}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array(fullStars).fill(0).map((_, i) => <FaStar key={i} className="text-yellow-400 text-xl" />)}
              {hasHalfStar && <FaStar className="text-yellow-400 text-xl opacity-50" />}
              {Array(emptyStars).fill(0).map((_, i) => <FaStar key={i + 10} className="text-gray-300 text-xl" />)}
            </div>
            <span className="text-lg font-semibold">{safeRating}</span>
            <span className="text-gray-500">({reviewCount} reviews)</span>
          </div>

          {/* Store Info */}
          <div className="flex items-center gap-2">
            <IoStorefrontOutline className="text-gray-600 text-lg" />
            <span className="text-gray-700 font-medium">{storeName || "Become a Seller"}</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <ScanNowButton title="View on Flipkart" className="flex-1 text-center text-2xl shadow-lg hover:shadow-xl" link={productLink} />
            <ShareButton />
          </div>
        </div>
      </div>
    </div>
  );
}
