import { LuBoxes } from "react-icons/lu";
import { MdVerifiedUser } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";

export default function HowItWorks() {
    return(
        <section className="py-24 px-6 bg-white"> 
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    How It Works
                </h2>
                <p className="text-xl text-gray-600">
                    Three simple steps to protect your purchase
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <i className="ri-link text-3xl text-white"><PiLinkSimpleBold /></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        1. Paste Link
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Copy any product URL from Amazon, AliExpress, or other supported platforms
                    </p>
                </div>
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <i className="ri-ai-generate text-3xl text-white"><LuBoxes /></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        2. AI Analysis
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Our AI scans reviews, seller history, and product quality indicators in seconds
                    </p>
                </div>
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <i className="ri-shield-check-line text-3xl text-white"><MdVerifiedUser /></i>
                    </div> 
                    <h3 className="text-2xl font-bold text-gray-900">
                        3. Get Results
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Receive detailed safety score and safer alternative recommendations
                    </p>
                </div>
            </div>
        </div>
        </section>
    )
}