import React from "react";
import { Helmet } from "react-helmet";

const BlogPostMeta = ({ title, description, image, url, jsonLdData,canonical }) => {
  return (
    <Helmet>
      {/* Page Title and Meta Description */}
      <title>{title} | My Blogs</title>
      <meta name="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />



      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="My Blogs" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@YourTwitterHandle" />


      <link rel="canonical" href={canonical} />

      {/* JSON-LD Structured Data */}
      {jsonLdData && (
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      )}
    </Helmet>
  );
};

export default BlogPostMeta;
