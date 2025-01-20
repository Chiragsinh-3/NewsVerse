import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    // Here you can handle the form submission (e.g., sending data to a server)
    setTimeout(() => {
      setStatus('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or feedback? We're here to help!
        </p>

        {/* Contact Form */}
        <div className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="text-left">
              <div className="">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="mt-1 block w-full px-4 py-2 border resize-none border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition duration-200"
              >
                {status || 'Send Message'}
              </button>
            </div>
          </form>

          {/* Success/Status Message */}
          {status && (
            <div className="mt-6 text-center text-lg font-semibold text-green-600">
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
