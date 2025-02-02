import React from 'react';

function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300 mb-4">
          Welcome to AARYA AI. By downloading or using the app, these terms will automatically apply to you.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-300 mb-4">
          By accessing and using AARYA AI, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
        <p className="text-gray-300 mb-4">
          Permission is granted to temporarily download one copy of AARYA AI for personal, non-commercial transitory viewing only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Content Ownership</h2>
        <p className="text-gray-300 mb-4">
          All content generated through AARYA AI is subject to our content ownership policies. Users retain rights to their generated content while granting AARYA AI license to use and display such content.
        </p>
      </div>
    </div>
  );
}

export default Terms;