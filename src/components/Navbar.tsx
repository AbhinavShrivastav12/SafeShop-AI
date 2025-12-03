"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-4 right-4 bg-white shadow-md rounded-xl z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <span className="text-blue-500">🛡️</span> SafeShop AI
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="#how" className="text-gray-600 hover:text-blue-500">How It Works</Link>
          <Link href="#features" className="text-gray-600 hover:text-blue-500">Features</Link>
          <Link href="#blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-500">About</Link>
        </nav>
        <button
          onClick={() => document.getElementById('productUrl')?.focus()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Scan Product
        </button>
      </div>
    </header>
  );
}
