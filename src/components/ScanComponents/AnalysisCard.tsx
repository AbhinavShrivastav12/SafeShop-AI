"use client";

import { AnalysisCardProps } from "@/types/AnalysisCardProps";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { HiOutlineExclamation } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { PiVan } from "react-icons/pi";
import { RiRefundLine } from "react-icons/ri";
import { TiStarOutline } from "react-icons/ti";
import { ReactNode } from "react";
import { AnimatedQualityCircle } from "../QualityCircle";

// Card Wrapper 
const Card = ({ children }: { children: ReactNode }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    {children}
  </div>
);

// Icon Circle
const IconCircle = ({
  gradient,
  children,
}: {
  gradient: string;
  children: ReactNode;
}) => (
  <div
    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${gradient}`}>
    {children}
  </div>
);

// Seller Row
const SellerRow = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-gray-700">
      {icon}
      <span className="text-sm text-left">{label}</span>
    </div>
    <span className="text-sm font-semibold text-gray-900 text-right">{value}</span>
  </div>
);

// Note Type
export interface Note {
  text: string;
  isPositive: boolean;
}

// Analysis Card Props
interface AnalysisCardFullProps
  extends Omit<AnalysisCardProps, "notes" | "qualityNotes"> {
  notes?: Note[]; // Fake review notes
  qualityNotes?: Note[]; // Product quality notes
}

//  Main Analysis Card
export default function AnalysisCard({
  reviewScore = 0,
  notes = [
    {
      text: "Detected repeated review patterns in 12% of reviews",
      isPositive: false,
    },
    { text: "Some reviews seem too similar", isPositive: false },
    {
      text: "Most reviews show natural writing style variation",
      isPositive: true,
    },
  ],
  sellerTrust = "TRUSTED SELLER",
  sellerAge = "0 years",
  complaintHistory = "Low",
  refundRate = "0%",
  deliveryIssues = "Minimal",
  productQualityScore = 0,
  qualityNotes = [
    { text: "Real customer photos match product images", isPositive: true },
    { text: "High-quality product images detected", isPositive: true },
    {
      text: "Discount appears slightly aggressive (40% off)",
      isPositive: false,
    },
  ],
}: AnalysisCardFullProps) {
 const renderNote = (note: Note, id: number) => (
  <div className="flex items-start gap-3" key={id}>
    {note.isPositive ? (
      <IoMdCheckmarkCircleOutline className="text-green-500 text-lg mt-0.5" />
    ) : (
      <HiOutlineExclamation className="text-yellow-500 text-lg mt-0.5" />
    )}
    <p className="text-sm text-gray-700 leading-snug">{note.text}</p>
  </div>
);


  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* FAKE REVIEW CHECKER */}
      <Card>
        <IconCircle gradient="bg-gradient-to-br from-blue-500 to-cyan-500">
          <FaSearch className="text-3xl text-white" />
        </IconCircle>

        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Fake Review Checker
        </h3>

        {/* Score Bar */}
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
            />
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-2 text-left">{notes.map(renderNote)}</div>
      </Card>

      {/*SELLER TRUST*/}
      <Card>
        <IconCircle gradient="bg-gradient-to-br from-purple-500 to-pink-500">
          <MdVerifiedUser className="text-3xl text-white" />
        </IconCircle>

        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Seller Trust Score
        </h3>

        <div className="bg-green-100 border-2 border-green-300 rounded-xl py-3 px-4 mb-6 text-center">
          <span className="text-lg font-bold text-green-700">
            {sellerTrust.charAt(0).toUpperCase() + sellerTrust.slice(1)}
          </span>
        </div>

        <div className="space-y-4">
          <SellerRow icon={<FiClock />} label="Seller Age" value={sellerAge} />
          <SellerRow
            icon={<AiOutlineExclamationCircle />}
            label="Complaint History"
            value={complaintHistory}
          />
          <SellerRow
            icon={<RiRefundLine />}
            label="Refund Rate"
            value={refundRate}
          />
          <SellerRow
            icon={<PiVan />}
            label="Delivery Issues"
            value={deliveryIssues}
          />
        </div>
      </Card>

      {/* PRODUCT QUALITY */}
      <Card>
        <IconCircle gradient="bg-gradient-to-br from-orange-500 to-red-500">
          <TiStarOutline className="text-3xl text-white" />
        </IconCircle>

        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Product Quality
        </h3>

        <AnimatedQualityCircle score={productQualityScore} />

        <div className="space-y-2 text-left">{qualityNotes.map(renderNote)}</div>
      </Card>
    </div>
  );
}
