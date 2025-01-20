import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Pick the best plan for your needs. Get started with NewsVerse and stay informed.
        </p>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 pt-8 pb-6">
              <h3 className="text-2xl font-semibold text-gray-800">Basic</h3>
              <p className="mt-4 text-lg text-gray-600">Perfect for casual readers.</p>
              <p className="mt-6 text-4xl font-bold text-gray-900">$9.99/month</p>
              <p className="mt-4 text-sm text-gray-500">Billed annually</p>
            </div>
            <div className="flex-1 bg-gray-100 px-6 py-8 text-center">
              <ul className="space-y-4">
                <li className="text-gray-600">Access to top headlines</li>
                <li className="text-gray-600">Basic search functionality</li>
                <li className="text-gray-600">Limited news categories</li>
              </ul>
              <button className="mt-8 w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 pt-8 pb-6">
              <h3 className="text-2xl font-semibold text-gray-800">Standard</h3>
              <p className="mt-4 text-lg text-gray-600">For regular users who want more.</p>
              <p className="mt-6 text-4xl font-bold text-gray-900">$19.99/month</p>
              <p className="mt-4 text-sm text-gray-500">Billed annually</p>
            </div>
            <div className="flex-1 bg-gray-100 px-6 py-8 text-center">
              <ul className="space-y-4">
                <li className="text-gray-600">All basic features</li>
                <li className="text-gray-600">Unlimited news categories</li>
                <li className="text-gray-600">Advanced search functionality</li>
                <li className="text-gray-600">Save your favorite articles</li>
              </ul>
              <button className="mt-8 w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 pt-8 pb-6">
              <h3 className="text-2xl font-semibold text-gray-800">Premium</h3>
              <p className="mt-4 text-lg text-gray-600">For the ultimate news experience.</p>
              <p className="mt-6 text-4xl font-bold text-gray-900">$29.99/month</p>
              <p className="mt-4 text-sm text-gray-500">Billed annually</p>
            </div>
            <div className="flex-1 bg-gray-100 px-6 py-8 text-center">
              <ul className="space-y-4">
                <li className="text-gray-600">All standard features</li>
                <li className="text-gray-600">Exclusive news content</li>
                <li className="text-gray-600">Customizable news feeds</li>
                <li className="text-gray-600">Priority support</li>
              </ul>
              <button className="mt-8 w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
