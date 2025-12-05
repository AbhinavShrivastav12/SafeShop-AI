'use client'

import { FaStar } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";

export default function ProductAnalysisSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-xl flex flex-col md:flex-row gap-6 animate-pulse relative">
      
      {/* Skeleton AI Score */}
      {/* Full-width on small screens, floating on md+ */}
      <div className="bg-gray-300 rounded-full w-full md:w-32 h-10 flex items-center justify-center mb-4 md:mb-0 md:absolute md:top-4 md:right-4">
        <MdVerifiedUser className="text-xl text-gray-400" />
        <span className="ml-2 hidden md:inline-block text-gray-400 text-sm">Scanning...</span>
      </div>

      {/* Skeleton Image */}
      <div className="flex-shrink-0 w-full md:w-1/3 h-64 bg-gray-300 rounded-xl border border-gray-200" />

      {/* Skeleton Product Info */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-300 rounded" />

          {/* Price */}
          <div className="flex flex-wrap gap-2 items-baseline">
            <div className="h-6 w-20 bg-gray-300 rounded" />
            <div className="h-4 w-12 bg-gray-300 rounded" />
            <div className="h-4 w-16 bg-gray-300 rounded" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array(5).fill(0).map((_, i) => (
                <FaStar key={i} className="text-gray-400 text-base md:text-xl" />
              ))}
            </div>
            <div className="h-4 w-8 bg-gray-300 rounded" />
            <div className="h-4 w-12 bg-gray-300 rounded" />
          </div>

          {/* Store Info */}
          <div className="flex items-center gap-2">
            <IoStorefrontOutline className="text-gray-400 text-lg" />
            <div className="h-4 w-32 bg-gray-300 rounded" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <div className="h-12 md:h-14 bg-gray-300 rounded-xl flex-1" />
          <div className="h-12 md:h-14 bg-gray-300 rounded-xl w-32 md:w-auto" />
        </div>
      </div>
    </div>
  );
}
