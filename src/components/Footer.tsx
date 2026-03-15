import Link from "next/link";
import { FartherIcon } from "./FartherLogo";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A1628",
        borderTop: "1px solid rgba(201, 168, 76, 0.2)",
      }}
    >
      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 48px" }}
      >
        {/* 4-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Column 1: Logo + Mission */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
              <FartherIcon variant="cream" size={36} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#F7F4EE",
                    lineHeight: 1.3,
                  }}
                >
                  Personal Wealth Management
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#C9A84C",
                    lineHeight: 1.3,
                  }}
                >
                  at Farther
                </div>
              </div>
            </Link>

            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 14,
                fontWeight: 300,
                color: "#BFC8D4",
                maxWidth: 280,
                lineHeight: 1.7,
                marginTop: 20,
              }}
            >
              Personalized wealth management for families and business owners in
              Dallas and Las Vegas. Powered by Farther&apos;s $18B+ Intelligent Wealth
              Platform &mdash; the #1 fastest-growing financial services firm in
              America.
            </p>

            <a
              href="https://www.linkedin.com/in/robertdavenport7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Robert Davenport on LinkedIn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 16,
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 14,
                color: "#BFC8D4",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              className="footer-linkedin-link"
            >
              LinkedIn
            </a>
          </div>

          {/* Column 2: Wealth Management */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#C9A84C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Wealth Management
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  label: "Investment Management",
                  href: "/services#investment-management",
                },
                {
                  label: "Financial Planning",
                  href: "/services#financial-planning",
                },
                {
                  label: "Tax Optimization",
                  href: "/services#tax-estate",
                },
                {
                  label: "Estate Planning",
                  href: "/services#tax-estate",
                },
                {
                  label: "Family Office Services",
                  href: "/services#business-owners",
                },
                {
                  label: "Philanthropic Planning",
                  href: "/services#financial-planning",
                },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: 14,
                      color: "#BFC8D4",
                      textDecoration: "none",
                      lineHeight: 2.2,
                      transition: "color 0.15s",
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Locations */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#C9A84C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Our Locations
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Dallas, TX", href: "/dallas" },
                { label: "Las Vegas, NV", href: "/las-vegas" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: 14,
                      color: "#BFC8D4",
                      textDecoration: "none",
                      lineHeight: 2.2,
                      transition: "color 0.15s",
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Start a Conversation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#C9A84C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Start a Conversation
            </h4>

            <a
              href="tel:+17252384291"
              style={{
                display: "block",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "#F7F4EE",
                textDecoration: "none",
                marginBottom: 8,
              }}
            >
              (725) 238-4291
            </a>

            <a
              href="mailto:robert.davenport@farther.com"
              style={{
                display: "block",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 14,
                color: "#BFC8D4",
                textDecoration: "none",
                marginBottom: 24,
              }}
            >
              robert.davenport@farther.com
            </a>

            <Link
              href="https://meetings.hubspot.com/robert-davenport"
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#C9A84C",
                color: "#0A1628",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 15,
                fontWeight: 600,
                padding: "16px 0",
                borderRadius: "var(--radius-minimal, 4px)",
                textAlign: "center",
                textDecoration: "none",
                transition: "background-color 0.15s",
                boxSizing: "border-box",
              }}
              className="footer-cta"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(201, 168, 76, 0.1)",
            marginTop: 48,
            paddingTop: 24,
          }}
        >
          <div
            className="footer-bottom"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 12,
                color: "#6B7A8D",
                margin: 0,
              }}
            >
              &copy; 2026 Personal Wealth Management at Farther. All rights
              reserved.
            </p>

            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 12,
                color: "#6B7A8D",
              }}
            >
              <Link
                href="/disclosures"
                style={{
                  color: "#6B7A8D",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">&middot;</span>
              <Link
                href="/disclosures"
                style={{
                  color: "#6B7A8D",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Terms of Service
              </Link>
              <span aria-hidden="true">&middot;</span>
              <Link
                href="/disclosures"
                style={{
                  color: "#6B7A8D",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                ADV Part 2
              </Link>
              <span aria-hidden="true">&middot;</span>
              <a
                href="https://www.finra.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#6B7A8D",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                FINRA/SIPC
              </a>
            </div>
          </div>

          {/* Compliance Disclosure */}
          <p
            style={{
              marginTop: 24,
              textAlign: "center",
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 11,
              fontWeight: 300,
              color: "#6B7A8D",
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.7,
            }}
          >
            Investment advisory services offered through Farther Finance
            Advisors, LLC (&ldquo;Farther&rdquo;), an SEC-registered investment
            adviser (CRD #314768). Registration with the SEC does not imply a
            certain level of skill or training. A copy of Farther&rsquo;s Form
            ADV Part 2A is available upon request or at{" "}
            <a
              href="https://adviserinfo.sec.gov/firm/summary/314768"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6B7A8D", textDecoration: "underline" }}
              className="footer-bottom-link"
            >
              adviserinfo.sec.gov
            </a>
            . Past performance is not indicative of future results. This
            website is for informational purposes only and does not constitute
            an offer, solicitation, or recommendation to buy or sell any
            security. All investment involves risk, including the possible loss
            of principal.
          </p>
        </div>
      </div>

      {/* Responsive Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .footer-linkedin-link:hover {
              color: #C9A84C !important;
            }
            .footer-link:hover {
              color: #F7F4EE !important;
            }
            .footer-cta:hover {
              background-color: #B8962F !important;
            }
            .footer-bottom-link:hover {
              color: #BFC8D4 !important;
            }
            @media (max-width: 768px) {
              .footer-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
              .footer-bottom {
                flex-direction: column !important;
                text-align: center !important;
                gap: 16px !important;
              }
            }
          `,
        }}
      />
    </footer>
  );
}
