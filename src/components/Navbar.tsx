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
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 8px",
          color: "white",
          flexWrap: "nowrap",
          overflowX: "auto", // ensures no wrap; horizontal scroll if too tight
          whiteSpace: "nowrap",
        }}
      >
        {/* Left Links */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "clamp(11px, 1.6vw, 14px)",
            flexShrink: 0,
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
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 6px",
          }}
        >
          <Link href="#home">
            <img
              src="/logo1.png"
              alt="Rajni Logo"
              style={{
                width: "clamp(70px, 12vw, 120px)",
                height: "auto",
                display: "block",
              }}
            />
          </Link>
        </div>

        {/* Right Links */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "clamp(11px, 1.6vw, 14px)",
            flexShrink: 0,
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
              padding: "2px 8px",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "clamp(10px, 1.5vw, 13px)",
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
