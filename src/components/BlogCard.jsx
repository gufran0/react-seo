// components/BlogCard.jsx
import { Link } from "react-router-dom";

const BlogCard = ({ title, date, slug }) => {
  return (
    <li className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/posts/${slug}`}>
        <div className="p-6 cursor-pointer">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-500">{date}</p>
        </div>
      </Link>
    </li>
  );
};

export default BlogCard;
