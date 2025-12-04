'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../Input";
import ScanNowButton from "../Button/ScanNowButton";
import { CgDanger } from "react-icons/cg";
import toast from "react-hot-toast";

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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">
          Paste a product link.<br />
          <span className="text-gray-700">Check if it’s</span><br />
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            FAKE.
          </span>
        </h1>

        <div className="flex gap-2 max-w-2xl bg-white rounded-2xl p-2 shadow-lg">
          <Input placeholder="https://www.flipkart.com/..." onChange={setUrl} value={url} />
          <ScanNowButton title="Scan Now" onClick={handleSubmit} />
        </div>

        <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
          <CgDanger className="text-orange-500" />
          Supports Flipkart for now
        </p>
      </div>
    </section>
  );
}
