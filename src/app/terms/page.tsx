export default function Terms() {
  return ( 
    <main className="px-6 pt-10">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last Updated: January 15, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 space-y-12">
          {/* 1. Agreement to Terms */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using SafeShop AI&rsquo;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service. The materials contained in this service are protected by applicable copyright and trademark law.
            </p>
          </div>

          {/* 2. Service Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed">
              SafeShop AI provides an AI-powered product analysis service that helps users identify potentially fake reviews, assess seller trustworthiness, and evaluate product quality. Our service analyzes publicly available information and provides risk assessments based on algorithmic analysis.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Important Disclaimer:</strong> SafeShop AI provides informational analysis only. We do not guarantee the accuracy of our assessments, and users should conduct their own due diligence before making any purchase decisions. Our service is not a substitute for professional advice.
            </p>
          </div>

          {/* 3. User Responsibilities */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed">As a user of SafeShop AI, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide accurate information when using our services</li>
              <li>Use the service only for lawful purposes and in accordance with these Terms</li>
              <li>Not attempt to interfere with, compromise, or disrupt the service or servers</li>
              <li>Not use automated systems or software to extract data from the service without permission</li>
              <li>Not misrepresent your identity or affiliation with any person or entity</li>
              <li>Not use the service to harass, abuse, or harm another person or entity</li>
            </ul>
          </div>

          {/* 4. Intellectual Property Rights */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              The service and its original content, features, and functionality are and will remain the exclusive property of SafeShop AI and its licensors. The service is protected by copyright, trademark, and other laws of both domestic and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of SafeShop AI.
            </p>
          </div>

          {/* 5. Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">5. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall SafeShop AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your access to or use of or inability to access or use the service</li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              <li>Purchase decisions made based on our analysis or recommendations</li>
            </ul>
          </div>

          {/* Acceptance Section */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
            <p className="text-gray-700 leading-relaxed">
              By using SafeShop AI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
