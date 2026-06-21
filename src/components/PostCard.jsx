import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="group block">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-fuchsia-500 transition-all duration-300">
        {/* Image */}
        <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Title */}
        <div className="p-4">
          <h2 className="text-base font-semibold text-white group-hover:text-fuchsia-400 transition-colors duration-200 line-clamp-2">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
