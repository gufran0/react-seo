import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { posts } from "../lib/data";
import { generateBlogPostJsonLd } from "../utility/jsonLdUtils";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center text-gray-600">Post not found</div>; // Handle missing post
  }

  const jsonLdData = generateBlogPostJsonLd(post, slug);

  return (
    <div className="bg-gray-50 pb-10">
      <Helmet>
        <title>{post.title} | My Blogs</title>
        <meta
          name="description"
          content={post.excerpt || "Read this amazing blog post"}
        />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.excerpt || "Read this amazing blog post"}
        />
        <meta property="og:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-12">
        <div className="px-6 sm:px-10 py-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
            {post.title}
          </h1>

          <p className="text-gray-500 text-sm text-center mb-6 italic">
            Published on {new Date(post.date).toLocaleDateString()}
          </p>

          <div
            className="prose prose-xl max-w-none text-gray-700 leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="p-6 sm:p-8">
        <img
        
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-md shadow-md"
            loading="lazy"
            // srcSet="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
            sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
          />

        </div>
      </div>
    </div>
  );
};

export default BlogPost;
