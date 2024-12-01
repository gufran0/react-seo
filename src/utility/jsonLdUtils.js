export const generateBlogPostJsonLd = (post, slug) => {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt || "Read this amazing blog post",
      image: post.image,
      author: {
        "@type": "Person",
        name: "Your Name", 
      },
      datePublished: post.date,
      dateModified: post.date, 
      publisher: {
        "@type": "Organization",
        name: "Your Blog Name",
        logo: {
          "@type": "ImageObject",
          url: "https://example.com/logo.png", 
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://yourwebsite.com/blog/${slug}`,
      },
    };
  };
  