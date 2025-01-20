import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">


      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Welcome to NewsVerse! 🌐</h2>
        <p className="mt-4 text-lg text-gray-600">
          NewsVerse is a cutting-edge, user-friendly platform built with React that provides you with up-to-date news from across the globe.
          Our goal is to keep you informed with the latest headlines, articles, and breaking news on topics that matter to you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Key Features</h2>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
          <li><strong>Real-time News Feed:</strong> Get the latest articles from top sources around the world.</li>
          <li><strong>Categories & Filters:</strong> Browse news by categories such as Politics, Technology, Sports, and more.</li>
          <li><strong>Responsive Design:</strong> Access NewsVerse on any device—smartphone, tablet, or desktop.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Built With ❤️</h2>
        <p className="mt-4 text-lg text-gray-600">
          NewsVerse is powered by the following technologies:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
          <li><strong>React.js:</strong> For a fast, smooth, and responsive user interface.</li>
          <li><strong>News API:</strong> To provide accurate and real-time news data.</li>
          <li><strong>Tailwind CSS:</strong> For a clean and modern design with utility-first styling.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600">
          Our mission at NewsVerse is simple: to empower users with the most up-to-date and relevant news. We believe in the power of information and aim to make it easily accessible for everyone.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          By using the News API, we ensure that you get news from credible sources, with minimal effort. Stay informed, anytime, anywhere.
        </p>
      </section>
    </div>
  );
};

export default About;
