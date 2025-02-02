import React from 'react';

function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300 mb-4">
          Welcome to AARYA AI ("Company," "we," "our," "us"). Please read these Terms and Conditions carefully before using our services, website, or mobile application (collectively, the "Services").
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-300 mb-4">
          By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Changes to Terms</h2>
        <p className="text-gray-300 mb-4">
          We reserve the right to modify these Terms at any time. We will notify users of any significant changes. Continued use of our Services constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts & Login</h2>
        <p className="text-gray-300 mb-4">
          <ul className="list-disc pl-6 mt-2">
            <li>You must provide accurate and complete information when creating an account.</li>
            <li>You are responsible for maintaining the security of your account credentials.</li>
            <li>We support login via third-party authentication methods, including Apple and Google.</li>
            <li>We reserve the right to suspend or terminate accounts for violations of these Terms.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Subscription & In-App Purchases</h2>
        <p className="text-gray-300 mb-4">
          <ul className="list-disc pl-6 mt-2">
            <li>Our app includes in-app purchases for premium subscription plans.</li>
            <li>Subscription payments will be charged to your Apple ID or Google Play account at confirmation of purchase.</li>
            <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.</li>
            <li>You can manage or cancel your subscription in your Apple App Store or Google Play account settings.</li>
            <li>We do not provide refunds for unused subscription periods.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Use of Services</h2>
        <p className="text-gray-300 mb-4">
          <ul className="list-disc pl-6 mt-2">
            <li>Our Services are for personal and non-commercial use only.</li>
            <li>You agree not to misuse or exploit our Services in any unlawful manner.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          All content, trademarks, and copyrights on our Services are owned by AARYA AI. You may not reproduce, distribute, or create derivative works without our explicit permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          Our Services are provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our Services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
        <p className="text-gray-300 mb-4">
          We may terminate or suspend your access to our Services without notice if you violate these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
        <p className="text-gray-300 mb-4">
          These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in the courts of [Your Jurisdiction].
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about these Terms, please contact us at <a href="mailto:aaryeaofficial@gmail.com" className="text-blue-400">aaryeaofficial@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}

export default Terms;