import React, { useState, useEffect } from "react";

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
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 8px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
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
                  padding: "8px 10px",
                  fontSize: ".85rem",
                  fontWeight: 600,
                  color: isActive ? "#0056b3" : "#333",
                  borderBottom: isActive ? "3px solid #0056b3" : "3px solid transparent",
                  transition: ".25s",
                  whiteSpace: "normal",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LinkNav;