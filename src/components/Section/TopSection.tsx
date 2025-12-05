"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../Input";
import ScanNowButton from "../Button/ScanNowButton";
import { CgDanger } from "react-icons/cg";
import toast from "react-hot-toast";
import Image from "next/image";

export default function TopSection() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (!url || !url.startsWith("http")) {
      return toast.error("Please paste a valid product URL.");
    }

    // Navigate to scan result page with query param
    router.push(`/scanResult?url=${encodeURIComponent(url)}`);
  };

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-teal-50">
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
              link. <br />
              <span className="text-gray-700">Check if it&rsquo;s</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                FAKE.
              </span>
            </h1>
            <p className=" text-xl text-gray-600 leading-relaxed max-w-xl">
              Instant AI check for fake reviews, scam sellers & low-quality
              products.
            </p>
            <div className="flex gap-2 max-w-2xl bg-white rounded-2xl p-2 shadow-lg">
              <Input
                placeholder="https://www.flipkart.com/..."
                onChange={setUrl}
                value={url}
              />
              <ScanNowButton title="Scan Now" onClick={handleSubmit} />
            </div>

            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
              <CgDanger className="text-orange-500" />
              Supports Flipkart for now
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              <Image
                src="/logo/vector.jpg"
                alt="vector"
                height={500}
                width={500}
                className="animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
