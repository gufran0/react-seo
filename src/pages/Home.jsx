// pages/Home.jsx
// pages/Home.jsx
import React from "react";
import BlogCard from "../components/BlogCard";
import { posts } from "../lib/data";

const Home = () => (
  <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-8 text-center text-pink-200">My Blogssss</h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </ul>
  </div>
);

export default Home;
