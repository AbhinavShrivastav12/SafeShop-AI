import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidLike, BiWorld } from "react-icons/bi";
import { MdElectricBolt, MdVerifiedUser } from "react-icons/md";
import { RiSearchEyeFill } from "react-icons/ri";

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to shop safely online
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
              <i className="ri-search-eye-line text-3xl text-white"><RiSearchEyeFill /> </i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI-Powered Detection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced machine learning algorithms analyze thousands of data
              points to identify fake reviews and suspicious patterns instantly.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
              <i className="ri-shield-user-line text-3xl text-white"><MdVerifiedUser /> </i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Seller Verification
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive background checks on seller history, complaint
              records, refund rates, and delivery performance to ensure
              trustworthiness.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
              <i className="ri-star-smile-line text-3xl text-white"><AiOutlineProduct />
</i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quality Prediction
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Predict product quality by analyzing customer photos, discount
              patterns, and comparing product images with real-world results.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
              <i className="ri-flashlight-line text-3xl text-white"><MdElectricBolt /> </i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Real-time Scanning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get instant results in seconds. Our cloud-based AI processes your
              product link and delivers comprehensive safety reports
              immediately.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <i className="ri-global-line text-3xl text-white"><BiWorld /> </i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Multi-Platform Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Works seamlessly with Amazon, AliExpress, eBay, Flipkart, Daraz,
              and many more popular e-commerce platforms worldwide.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
              <i className="ri-thumb-up-line text-3xl text-white"><BiSolidLike /></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Safe Alternatives
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Receive curated recommendations for verified, high-quality
              alternatives if your scanned product shows warning signs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
