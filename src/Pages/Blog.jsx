import React from "react";

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">GearNest Blog</h1>

      {/* Blog Post 1 */}
      <article className="mb-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-700">How to Choose the Right Sports Equipment</h2>
        <p className="text-gray-700 mb-2">
          Choosing the right sports equipment is crucial for both performance and safety. At GearNest, we recommend considering your skill level, the type of sport, and your personal preferences. Always check for quality certifications and try out different brands to find what suits you best.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>Assess your needs and goals</li>
          <li>Check for durability and comfort</li>
          <li>Read reviews and expert opinions</li>
        </ul>
        <p className="text-gray-500 text-sm">Posted on May 30, 2025</p>
      </article>

      {/* Blog Post 2 */}
      <article className="mb-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-700">The Importance of Protective Gear in Sports</h2>
        <p className="text-gray-700 mb-2">
          Injuries can happen anytime, especially in high-impact sports. Using the right protective gear—like helmets, shin guards, and pads—can significantly reduce the risk of injury. GearNest offers a wide range of certified protective equipment to keep you safe while you play.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>Always wear appropriate gear for your sport</li>
          <li>Replace damaged or worn-out equipment</li>
          <li>Ensure a proper fit for maximum protection</li>
        </ul>
        <p className="text-gray-500 text-sm">Posted on May 28, 2025</p>
      </article>

      {/* Blog Post 3 */}
      <article className="mb-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-700">Why Customization Matters in Sports Equipment</h2>
        <p className="text-gray-700 mb-2">
          Customizing your sports gear can enhance comfort and performance. Whether it’s adjusting the grip on your cricket bat or choosing the right size for your football boots, GearNest provides customization options to help you get the most out of your equipment.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>Personalize for better fit and feel</li>
          <li>Boost your confidence on the field</li>
          <li>Stand out with unique designs</li>
        </ul>
        <p className="text-gray-500 text-sm">Posted on May 25, 2025</p>
      </article>
    </div>
  );
};

export default Blog;