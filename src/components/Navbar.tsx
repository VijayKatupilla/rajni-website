"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "events", "catering", "gallery", "contact"];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 12px",
          color: "white",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT LINKS */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexShrink: 1,
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: "clamp(12px, 2vw, 16px)", // Auto-scale for smaller screens
          }}
        >
          {["home", "menu", "events"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div
          style={{
            flexShrink: 0,
            textAlign: "center",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="#home">
            <img
              src="/logo1.png"
              alt="Rajni Logo"
              style={{
                width: "clamp(80px, 14vw, 130px)", // dynamically resize logo
                height: "auto",
                display: "block",
              }}
            />
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexShrink: 1,
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: "clamp(12px, 2vw, 16px)",
            alignItems: "center",
          }}
        >
          {["catering", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <a
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            style={{
              backgroundColor: "#FFD700",
              color: "#000",
              padding: "4px 10px",
              borderRadius: "5px",
              fontWeight: 600,
              fontSize: "clamp(11px, 1.8vw, 14px)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Order Online
          </a>
        </div>
      </div>
    </nav>
  );
}
