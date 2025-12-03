export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 py-16">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-blue-500">🛡️</span> SafeShop AI
          </div>
          <p className="text-gray-500 mt-2">Your AI guardian against online scams</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>How It Works</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Browser Extension</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Report a Bug</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press Kit</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-400 text-sm">
        © 2025 SafeShop AI. All rights reserved.
      </div>
    </footer>
  );
}
