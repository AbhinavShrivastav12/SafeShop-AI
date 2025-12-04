import Image from "next/image";
import Input from "../Input";
import ScanNowButton from "../Button/ScanNowButton";
import { CgDanger } from "react-icons/cg";

export default function TopSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50  ">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                AI-Powered Protection
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Paste a product
              <br />
              link.
              <br />
              <span className="text-gray-700">Check if it&rsquo;s</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                FAKE.
              </span>
            </h1>
            <p className=" text-xl text-gray-600 leading-relaxed max-w-xl">
              {" "}
              Instant AI check for fake reviews, scam sellers & low-quality
              products.{" "}
            </p>
            {/* Input Field */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center gap-2 max-w-2xl">
              <Input placeholder="https://amazon.com/your-product-link" />
              <ScanNowButton title="Scan Now" />
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <i className="ri-alert-line text-orange-500">
                <CgDanger />
              </i>
              Supports Amazon, AliExpress, Flipkart, Daraz, eBay, etc.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              <Image
                src="/logo/vector.jpg"
                height={500}
                width={500}
                alt="Homepage"
                className="animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
