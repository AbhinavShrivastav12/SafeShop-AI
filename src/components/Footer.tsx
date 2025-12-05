import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="space-y-3">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo/logo.png" alt="" height={25} width={25} />
                <span className="text-2xl font-bold">SafeShop AI</span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              AI-Powered Shopping Protection
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
              <i className="ri-twitter-x-line text-lg">
                <FaXTwitter />
              </i>
            </a>
            <a
              href="#"
              className="w-10 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
              <i className="ri-facebook-fill text-lg">
                <FaFacebookF />
              </i>
            </a>
            <a
              href="#"
              className="w-10 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
              <i className="ri-linkedin-fill text-lg">
                <FaLinkedinIn />
              </i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 SafeShop AI. Made with ❤️ by Abhinav
            </p>
            <div className="flex gap-8">
              <a
                href="#about-us"
                className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
