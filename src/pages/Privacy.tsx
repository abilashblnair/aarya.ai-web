import React from 'react';

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300 mb-4">
          AARYA AI ("Company," "we," "our," "us") respects your privacy. This Privacy Policy describes how we collect, use, and protect your information when you use our services.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <div className="text-gray-300 mb-4">
          We collect the following types of information:
          <ul className="list-disc pl-6 mt-2">
            <li>Name, email, and login credentials (Apple, Google authentication)</li>
            <li>Payment information (collected by Apple or Google Play for subscriptions)</li>
            <li>Usage data including IP address, browser type, OS, and session interactions</li>
            <li>Cookies and tracking technologies for website analytics</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <div className="text-gray-300 mb-4">
          We use your information for the following purposes:
          <ul className="list-disc pl-6 mt-2">
            <li>To provide and improve our services</li>
            <li>To process transactions and manage subscriptions</li>
            <li>To send important notifications and updates</li>
            <li>To enforce our terms and comply with legal obligations</li>
          </ul>
        </div>


        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing of Information</h2>
        <p className="text-gray-300 mb-4">
          We do not sell or rent your personal data. However, we may share information with:
          <ul className="list-disc pl-6 mt-2">
            <li>Third-party service providers (e.g., payment processing, analytics, customer support)</li>
            <li>Legal authorities to comply with legal requirements or protect our rights</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="text-gray-300 mb-4">
        We employ industry-standard security measures, including encryption, firewalls, and secure access controls, to protect your data from unauthorized access, alteration, or disclosure. Additionally, we conduct regular security audits, monitor our systems for potential vulnerabilities, and ensure compliance with applicable data protection regulations to safeguard your information
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p className="text-gray-300 mb-4">
          You have the following rights:
          <ul className="list-disc pl-6 mt-2">
            <li>Update or delete your personal information by contacting us</li>
            <li>Opt-out of marketing emails using the unsubscribe link</li>
            <li>Request a copy of the data we hold about you</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Retention of Data</h2>
        <p className="text-gray-300 mb-4">
        We retain your data for as long as necessary to fulfill the purposes outlined in this Privacy Policy or to comply with legal, regulatory, or contractual obligations. Once no longer required, we securely delete or anonymize your data in accordance with industry standards and applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
        <p className="text-gray-300 mb-4">
        Our services may include links to third-party websites, which operate independently and have their own privacy policies. We do not control or assume responsibility for their content, data collection practices, or privacy policies. We encourage you to review their terms before providing any personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
        <p className="text-gray-300 mb-4">
        We may periodically update this Privacy Policy to reflect changes in our practices, legal requirements, or industry standards. If significant changes are made, we will notify users through prominent updates on our website, in-app notifications, or direct communication, as required by applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:aarya.ai.info@gmail.com" className="text-blue-400">aarya.ai.info@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
