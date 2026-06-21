import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);

  return (
    <div className="w-full py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">All Posts</h1>
          <p className="text-zinc-500 text-sm mt-1">
            {posts.length} posts published
          </p>
        </div>
        {posts.length === 0 ? (
          <div className="text-center py-20 text-zinc-600">
            <p className="text-lg font-medium">No posts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPost;
