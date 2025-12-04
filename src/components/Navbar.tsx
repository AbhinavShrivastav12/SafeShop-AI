"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { VscSearch } from "react-icons/vsc";
import ScanProductButton from "./Button/ScanProductButton";

export default function Navbar() {

  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/scanProduct`);
  }
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg shadow-lg rounded-full px-8 py-4 w-[95%] max-w-7xl">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="Logo" height={25} width={25}/> <span className="text-xl font-semibold text-gray-900">SafeShop AI</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="#how" className="text-gray-600 hover:text-blue-500">How It Works</Link>
          <Link href="#features" className="text-gray-600 hover:text-blue-500">Features</Link>
          <Link href="#blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-500">About</Link>
        </nav>
        <ScanProductButton text="Scan Product" icon={<VscSearch />} className="rounded-4xl text-white " onClick={handleSubmit}/>
      </div>
    </header>
  );
}
