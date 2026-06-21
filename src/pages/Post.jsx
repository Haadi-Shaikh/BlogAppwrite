import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post && authStatus) setPost(post);
        else navigate("/login");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
        toast.info("Post Deleted", {
          autoClose: 2000,
          position: "bottom-center",
        });
      }
    });
  };

  if (!post) return null;

  return (
    <div className="py-10">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Featured image */}
          <div
            className="relative rounded-2xl overflow-hidden border border-zinc-800 mb-8"
            style={{ height: "420px" }}
          >
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {/* Author actions */}
            {isAuthor && (
              <div className="absolute top-4 right-4 flex gap-2">
                <Link to={`/edit-post/${post.$id}`}>
                  <button className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs px-4 py-2 rounded-lg border border-zinc-700 transition-all duration-200">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={deletePost}
                  className="bg-red-600 hover:bg-red-500 text-white text-xs px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Divider */}
          <div className="h-px bg-zinc-800 mb-6" />

          {/* Content */}
          <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed">
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  );
}
