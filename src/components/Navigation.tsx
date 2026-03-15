"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FartherIcon } from "./FartherLogo";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/wealth-management" },
  { label: "Dallas", href: "/dallas" },
  { label: "Las Vegas", href: "/las-vegas" },
  { label: "Insights", href: "/insights" },
] as const;

const CTA_HREF = "https://meetings.hubspot.com/robert-davenport";
const CTA_LABEL = "Schedule a Conversation";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: scrolled ? 64 : 80,
          backgroundColor: "rgba(51, 51, 51, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(29, 118, 130, 0.2)",
          zIndex: 9999,
          transition: "height 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 40px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center", gap: 12 }}
            aria-label="Personal Wealth Management at Farther - Home"
          >
            <FartherIcon variant="cream" size={36} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#F7F4EE",
                  letterSpacing: "0.02em",
                }}
              >
                Personal Wealth Management
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#1d7682",
                  letterSpacing: "0.02em",
                }}
              >
                at Farther
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 36,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily:
                    "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: isActive(link.href) ? "#1d7682" : "#F7F4EE",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  position: "relative",
                  paddingBottom: 4,
                  borderBottom: isActive(link.href)
                    ? "2px solid #1d7682"
                    : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.color = "#1d7682";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.color = "#F7F4EE";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Desktop CTA */}
            <Link
              href={CTA_HREF}
              style={{
                fontFamily:
                  "'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "#1d7682",
                backgroundColor: "transparent",
                border: "1.5px solid #1d7682",
                borderRadius: 2,
                padding: "14px 28px",
                textDecoration: "none",
                transition: "background-color 0.2s ease, color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1d7682";
                e.currentTarget.style.color = "#F7F4EE";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1d7682";
              }}
            >
              {CTA_LABEL}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <Menu size={28} color="#F7F4EE" strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div
        style={{
          height: scrolled ? 64 : 80,
          transition: "height 0.3s ease",
        }}
      />

      {/* Mobile Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "#333333",
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          visibility: mobileMenuOpen ? "visible" : "hidden",
        }}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Mobile Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 80,
            padding: "0 40px",
            borderBottom: "1px solid rgba(29, 118, 130, 0.2)",
            flexShrink: 0,
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Personal Wealth Management at Farther - Home"
          >
            <FartherIcon variant="cream" size={32} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#F7F4EE",
                  letterSpacing: "0.02em",
                }}
              >
                Personal Wealth Management
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#1d7682",
                  letterSpacing: "0.02em",
                }}
              >
                at Farther
              </span>
            </div>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <X size={28} color="#F7F4EE" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "0 40px",
            overflowY: "auto",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily:
                  "'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontSize: 17,
                fontWeight: 500,
                color: isActive(link.href) ? "#1d7682" : "#F7F4EE",
                textDecoration: isActive(link.href) ? "underline" : "none",
                textDecorationColor: "#1d7682",
                textUnderlineOffset: 6,
                height: 56,
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid rgba(29, 118, 130, 0.1)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div style={{ padding: "24px 40px 48px" }}>
          <Link
            href={CTA_HREF}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "block",
              fontFamily:
                "'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#F7F4EE",
              backgroundColor: "#1d7682",
              border: "none",
              borderRadius: 2,
              padding: "18px 28px",
              textDecoration: "none",
              textAlign: "center",
              width: "100%",
            }}
          >
            {CTA_LABEL}
          </Link>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
