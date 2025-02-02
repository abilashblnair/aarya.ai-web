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
          We implement reasonable security measures to protect your data from unauthorized access, alteration, or disclosure.
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
          We retain your data as long as necessary for the purposes outlined in this Privacy Policy or as required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
        <p className="text-gray-300 mb-4">
          Our services may contain links to third-party websites. We are not responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
        <p className="text-gray-300 mb-4">
          We may update this Privacy Policy periodically. We will notify users of significant changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:aaryeaofficial@gmail.com" className="text-blue-400">aaryeaofficial@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
