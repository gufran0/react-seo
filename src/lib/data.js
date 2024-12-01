import ReactHelmet from "../assets/images/react-helmet.png";
import JsonLd from "../assets/images/jsons-ld.png";
import CodeSpillting from "../assets/images/codespillting.png";
import ImageLoading from "../assets/images/imageLoading.png";
import CoreWitals from "../assets/images/core-witals.webp";
import SiteMap from '../assets/images/sitemap.png'
export const posts = [
  {
    id: 1,
    title: "React Helmet: Enhance SEO and Social Sharing for React Apps",
    date: "2024-11-30",
    slug: "react-helmet-seo-social-sharing",

    content: `<p>React Helmet is an essential tool for any React developer aiming to create an SEO-friendly and user-focused application. By enabling dynamic management of the <head> section, it ensures your app performs well in search rankings, looks great when shared on social platforms, and provides a better overall user experience. Whether you're building a blog, e-commerce site, or portfolio, React Helmet empowers you to make your React app stand out.</p>`,
    image: ReactHelmet,
  },
  {
    id: 2,
    title: "SEO Optimization with JSON-LD in React",
    date: "2024-11-29",
    slug: "seo-jsonld-react",
    content:
      "Optimizing a React.js app for SEO ensures better visibility, faster performance, and an improved user experience. By using techniques like React Helmet for meta tags, JSON-LD for structured data, and practices like pre-rendering and lazy loading, you make your app both search engine and user-friendly. SEO is an ongoing process. Regularly monitor your app’s performance with tools like Google Search Console and Rich Results Test, and update your strategies to stay ahead. With these best practices, your React app is set for success, delivering value to users and ranking higher in search results.",
    image: JsonLd,
  },
  {
    id: 3,
    title: "Optimize Page Load Speed",
    date: "2024-11-25",
    slug: "optimize-page-load-speed",
    content: `
      <p><strong>Reduces Initial Load Time:</strong> Only critical code is loaded upfront, while non-critical parts are loaded on demand.</p>
      <p><strong>Improves Performance:</strong> Smaller bundles load faster, enhancing user experience.</p>
      <p><strong>Efficient Resource Usage:</strong> Components are loaded only when needed.</p>
    `,
    image: CodeSpillting,
  },

  {
    id: 4,
    title: "Image Optimization for Better SEO",
    date: "2024-11-30",
    slug: "image-optimization-seo",
    content: `
      <p><strong>Faster Load Times:</strong> Lazy loading ensures critical resources are prioritized, and responsive images minimize the data loaded for smaller screens.</p>
      <p><strong>Improved User Experience:</strong> Users see the best image quality without unnecessary delays.</p>
      <p><strong>SEO Boost:</strong> Optimized images contribute to better Core Web Vitals, improving search engine rankings.</p>
    `,
    image: ImageLoading,
  },
  {
    id: 5,
    title: " Core Web Vitals Optimization",
    date: "2024-11-29",
    slug: "image-optimization",
    content: `<p>Use a Content Delivery Network (CDN) to reduce latency</p>
              <p>Optimize and compress JavaScript and CSS files</p>
             <p>Lazy load non-critical resources like images and videos</p>`,
    image: CoreWitals,
  },
  {
    id: 6,
    title: "Why Sitemaps are Essential for SEO",
    date: "2024-11-29",
    slug: "sitemaps-for-seo",
    content: `
      <p>A sitemap is an XML file that lists all the important pages of your website. It helps search engine crawlers understand your website's structure and prioritize which pages to crawl.</p>
      <p><strong>Key Benefits:</strong></p>
      <p><strong>Improves Crawling Efficiency:</strong> Search engines can quickly discover all pages, even those buried deep within your site.</p>
      <p><strong>Informs Search Engines:</strong> Provides details like the last modified date and crawl frequency.</p>
      <p><strong>Supports Dynamic Content:</strong> Ensures crawlers stay updated on new or recently modified content, such as blog posts.</p>
    `,
    image:SiteMap
  },
  {
    id: 6,
    title: "Why Sitemaps are Essential for SEO",
    date: "2024-11-29",
    slug: "sitemaps-for-seo",
    content: `
      <p>A sitemap is an XML file that lists all the important pages of your website. It helps search engine crawlers understand your website's structure and prioritize which pages to crawl.</p>
      <p><strong>Key Benefits:</strong></p>
      <p><strong>Improves Crawling Efficiency:</strong> Search engines can quickly discover all pages, even those buried deep within your site.</p>
      <p><strong>Informs Search Engines:</strong> Provides details like the last modified date and crawl frequency.</p>
      <p><strong>Supports Dynamic Content:</strong> Ensures crawlers stay updated on new or recently modified content, such as blog posts.</p>
    `
  }
 
];
