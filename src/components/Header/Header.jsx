import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoutBtn, Container, Logo } from "../index";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header
      style={{
        backgroundColor: "#111111",
        borderBottom: "1px solid #27272a",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
          }}
        >
          {/* Logo */}
          <Link to="/">
            <Logo width="70px" />
          </Link>

          {/* Nav Links */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#a1a1aa",
                      padding: "8px 16px",
                      fontSize: "14px",
                      fontWeight: "500",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.backgroundColor = "#27272a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#a1a1aa";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}
            {authStatus && (
              <li style={{ marginLeft: "8px" }}>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
