"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Logo */}
      <Image src="/logo/logo.png" alt="SafeShop AI Logo" width={80} height={80} className="mb-6" />

      {/* 404 Heading */}
      <h1 className="text-7xl md:text-9xl font-extrabold mb-4 bg-gradient-to-r from-[#f55f29] via-[#f45a2e] to-[#f76a1f] bg-clip-text text-transparent">
        404
      </h1>

      {/* Message */}
      <p className="text-xl md:text-2xl text-gray-700 mb-8 text-center">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Go Home Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-3xl font-semibold hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
