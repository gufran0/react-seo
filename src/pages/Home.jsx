import React from "react";
import { Helmet } from "react-helmet";
import BlogCard from "../components/BlogCard";
import { posts } from "../lib/data";

const Home = () => (
  <div className="container mx-auto p-8  min-h-screen">
    <Helmet>
      <title>My Blogs | Home</title>
      <meta
        name="description"
        content="Explore my blog collection on various topics. Stay informed and entertained."
      />
    </Helmet>
    <h1 className="text-3xl font-bold mb-8 text-center ">
      Blog about seo practices
    </h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
