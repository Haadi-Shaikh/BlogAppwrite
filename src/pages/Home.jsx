import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      setPosts(posts ? posts.documents : []);
    });
  }, []);

  if (!authStatus) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "520px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: "999px",
              backgroundColor: "#2d1b3d",
              border: "1px solid #7e22ce",
              color: "#e879f9",
              fontSize: "11px",
              fontWeight: "600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Welcome
          </div>

          <h1
            style={{
              fontSize: "52px",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Stories worth <span style={{ color: "#e879f9" }}>reading.</span>
          </h1>

          <p
            style={{ color: "#71717a", fontSize: "18px", marginBottom: "32px" }}
          >
            Sign in to explore posts from writers around the world.
          </p>

          <div
            style={{ display: "flex", gap: "12px", justifyContent: "center" }}
          >
            <button
              onClick={() => navigate("/login")}
              style={{
                backgroundColor: "#e879f9",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              style={{
                backgroundColor: "#27272a",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                border: "1px solid #3f3f46",
                cursor: "pointer",
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 0" }}>
      <Container>
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#ffffff" }}>
            Latest Posts
          </h1>
          <p style={{ color: "#71717a", fontSize: "14px", marginTop: "4px" }}>
            Explore what's been published recently
          </p>
        </div>

        {posts.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "80px 0", color: "#3f3f46" }}
          >
            <p style={{ fontSize: "18px", fontWeight: "500" }}>No posts yet.</p>
            <p style={{ fontSize: "14px", marginTop: "4px" }}>
              Be the first to publish something.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
