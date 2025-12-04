import Image from "next/image";
import {  FaStar } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdVerified, MdVerifiedUser } from "react-icons/md";
import ScanNowButton from "../Button/ScanNowButton";

export default function ProductAnalysisCard() {
    return(
        <div className="max-w-7xl mx-auto px-6 py-12 pt-32 ">
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 relative overflow-hidden">
                <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                        <i className="ri-shield-check-line text-xl"><MdVerifiedUser/></i>
                        <span className="font-bold">AI Scam Score: 30%</span>
                    <span className="text-sm opacity-90">(Low Risk)</span>
                    </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="w-full h-80">
                    <Image src="/productImage/EarPhone.jpg" alt="" height={100} width={100} className="w-full h-full object-contain rounded-xl border border-gray-200"/>
                </div>
                <div className="md:col-span-2 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                        Premium Wireless Bluetooth Headphones with Active Noise Cancellation
                    </h1>
                    <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-bold text-blue-600">
                            $89.99
                        </span>
                        <span className="text-xl text-gray-400 line-through">
                           $149.99 
                        </span>
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                            40% OFF
                        </span>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                <i className="ri-star-fill text-xl text-yellow-400"><FaStar /></i>
                                <i className="ri-star-fill text-xl text-yellow-400"><FaStar /></i>
                                <i className="ri-star-fill text-xl text-yellow-400"><FaStar /></i>
                                <i className="ri-star-fill text-xl text-yellow-400"><FaStar /></i>
                                <i className="ri-star-line text-xl text-gray-300"><FaStar /></i>
                            </div>
                            <span className="text-lg font-semibold text-gray-900">
                                4.2
                            </span>
                            <span className="text-gray-500">(9,847 reviews)</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                        <i className="ri-store-2-line text-gray-600"><IoStorefrontOutline/></i>
                        <span className="text-gray-700 font-medium">
                            TechGear Official Store
                        </span>
                        <i className="ri-verified-badge-fill text-blue-500 text-lg"><MdVerified /></i>
                    </div>
                    <div className="pt-4 flex gap-4">
                        <ScanNowButton title="View on Amazon" className="flex-1"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}