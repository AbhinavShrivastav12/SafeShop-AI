'use client'

import { AnalysisCardProps } from "@/types";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { HiOutlineExclamation } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { PiVan } from "react-icons/pi";
import { RiRefundLine } from "react-icons/ri";
import { TiStarOutline } from "react-icons/ti";


export default function AnalysisCard({
  reviewScore = 78,
  repeatedPatterns = [
    "Detected repeated review patterns in 12% of reviews",
    "Some reviews seem too similar",
  ],
  sellerTrust = "TRUSTED SELLER",
  sellerAge = "3.5 years",
  complaintHistory = "Low",
  refundRate = "2.3%",
  deliveryIssues = "Minimal",
  productQualityScore = 8.2,
  qualityNotes = [
    "Real customer photos match product images",
    "High-quality product images detected",
    "Discount appears slightly aggressive (40% off)",
  ],
}: AnalysisCardProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Fake review checker */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto">
          <FaSearch className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Fake Review Checker
        </h3>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Review Authenticity
            </span>
            <span className="text-sm font-bold text-green-600">
              {reviewScore}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              style={{ width: `${reviewScore}%` }}
            ></div>
          </div>
        </div>
        <div className="space-y-3">
          {repeatedPatterns.map((note, idx) => (
            <div className="flex items-start gap-3 text-left" key={idx}>
              <HiOutlineExclamation className="text-orange-500 text-lg mt-0.5" />
              <p className="text-sm text-gray-700">{note}</p>
            </div>
          ))}
          <div className="flex items-start gap-3 text-left">
            <IoMdCheckmarkCircleOutline className="text-green-500 text-lg mt-0.5" />
            <p className="text-sm text-gray-700">
              Most reviews show natural writing style variation
            </p>
          </div>
        </div>
      </div>

      {/* Fake seller checker */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
          <MdVerifiedUser className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Seller Trust Score
        </h3>
        <div className="bg-green-100 border-2 border-green-300 rounded-xl py-3 px-4 mb-6 text-center">
          <span className="text-lg font-bold text-green-700">{sellerTrust}</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiClock className="text-gray-600" />
              <span className="text-sm text-gray-700">Seller Age</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">{sellerAge}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AiOutlineExclamationCircle className="text-gray-600" />
              <span className="text-sm text-gray-700">Complaint History</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">{complaintHistory}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RiRefundLine className="text-gray-600" />
              <span className="text-sm text-gray-700">Refund Rate</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">{refundRate}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PiVan className="text-gray-600" />
              <span className="text-sm text-gray-700">Delivery Issues</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">{deliveryIssues}</span>
          </div>
        </div>
      </div>

      {/* Product Quality Check */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
          <TiStarOutline className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Product Quality
        </h3>
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="8" fill="none" />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(productQualityScore / 10) * 360} 360`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981"></stop>
                  <stop offset="100%" stopColor="#059669"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">{productQualityScore}</span>
              <span className="text-sm text-gray-500">/10</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {qualityNotes.map((note, idx) => (
            <div className="flex items-start gap-3" key={idx}>
              {note.includes("Discount") ? (
                <HiOutlineExclamation className="text-orange-500 text-lg mt-0.5" />
              ) : (
                <IoMdCheckmarkCircleOutline className="text-green-500 text-lg mt-0.5" />
              )}
              <p className="text-sm text-gray-700">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
