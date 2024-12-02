import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
 
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        </div>
      </header>

      
      <main className="flex-grow container mx-auto p-6">
        <article className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi, I'm a passionate web developer specializing in React.js and SEO optimization techniques. My goal is to create high-performance, user-friendly websites that rank well on search engines. This blog shares my insights on best practices, tools, and strategies for making React applications SEO-friendly.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            From optimizing Core Web Vitals to implementing structured data and lazy loading, I enjoy exploring innovative ways to improve web performance and visibility. Stay tuned for more tips and tutorials to take your React apps to the next level!
          </p>
        </article>
      </main>

    
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
