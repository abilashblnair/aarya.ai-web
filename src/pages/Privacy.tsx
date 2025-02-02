import React from 'react';

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300 mb-4">
          Your privacy is important to us. It is AARYA AI's policy to respect your privacy regarding any information we may collect from you through our app.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We only collect information that is necessary to provide you with our services. This may include:
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>Basic account information</li>
            <li>Usage data</li>
            <li>Generated content</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          We use the information we collect in various ways, including:
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>Provide, operate, and maintain our app</li>
            <li>Improve and personalize your experience</li>
            <li>Understand and analyze usage trends</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Protection</h2>
        <p className="text-gray-300 mb-4">
          We implement a variety of security measures to maintain the safety of your personal information when you use our app.
        </p>
      </div>
    </div>
  );
}

export default Privacy;