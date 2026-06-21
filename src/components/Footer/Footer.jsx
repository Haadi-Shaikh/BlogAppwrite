import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  const linkStyle = {
    color: "#a1a1aa",
    fontSize: "14px",
    textDecoration: "none",
  };

  return (
    <footer
      style={{ backgroundColor: "#111111", borderTop: "1px solid #27272a" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {/* Brand */}
          <div style={{ flex: "1 1 200px" }}>
            <Logo width="80px" />
            <p
              style={{ color: "#52525b", fontSize: "13px", marginTop: "24px" }}
            >
              &copy; {new Date().getFullYear()} INK. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div style={{ flex: "1 1 120px" }}>
            <h3
              style={{
                color: "#52525b",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Company
            </h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                (item) => (
                  <li key={item}>
                    <Link to="/" style={linkStyle}>
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support */}
          <div style={{ flex: "1 1 120px" }}>
            <h3
              style={{
                color: "#52525b",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Support
            </h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {["Account", "Help", "Contact Us", "Customer Support"].map(
                (item) => (
                  <li key={item}>
                    <Link to="/" style={linkStyle}>
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Legals */}
          <div style={{ flex: "1 1 120px" }}>
            <h3
              style={{
                color: "#52525b",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Legals
            </h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                (item) => (
                  <li key={item}>
                    <Link to="/" style={linkStyle}>
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
