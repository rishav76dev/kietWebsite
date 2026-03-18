import React, { useRef, useState, useEffect } from "react";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#highlights", label: "Highlights" },
  { href: "#vision-mission", label: "Vision & Mission" },
  { href: "#labs", label: "Labs & Infrastructure" },
  { href: "#coe", label: "COE" },
  { href: "#clubs", label: "Clubs" },
  { href: "#dean-message", label: "Dean's Message" },
  { href: "#faculty", label: "Faculty" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#program-outcomes", label: "Program Outcomes" },
];

const LinkNav = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState("#overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
      let current = "#overview";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= 160) current = `#${s.id}`;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid #e0e6ed",
        boxShadow: "0 2px 8px rgba(0,0,0,.05)",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", gap: 0 }}>
        {/* Left arrow */}
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px 8px",
            fontSize: 16,
            color: "#666",
            flexShrink: 0,
          }}
        >
          ◀
        </button>

        {/* Scrollable nav */}
        <div
          ref={scrollRef}
          className="scrollbar-hide"
          style={{
            overflowX: "auto",
            display: "flex",
            gap: 0,
            scrollBehavior: "smooth",
            flex: 1,
          }}
        >
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                style={{
                  flexShrink: 0,
                  padding: "14px 18px",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: isActive ? "#0056b3" : "#333",
                  borderBottom: isActive ? "3px solid #0056b3" : "3px solid transparent",
                  transition: ".25s",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px 8px",
            fontSize: 16,
            color: "#666",
            flexShrink: 0,
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default LinkNav;