import Link from "next/link";
import { FartherIcon } from "./FartherLogo";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333333",
        borderTop: "1px solid rgba(29, 118, 130, 0.2)",
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
                    color: "#1d7682",
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
                color: "#b6d0ed",
                maxWidth: 280,
                lineHeight: 1.7,
                marginTop: 20,
              }}
            >
              Fiduciary wealth management for families and business owners in
              Arizona, California, and Nevada. Jay Chang is an investment adviser
              representative of Farther Finance Advisors, LLC, an SEC-registered
              investment adviser (CRD# 302050).
            </p>

            <a
              href="https://www.linkedin.com/in/jaychang480"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jay Chang on LinkedIn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 16,
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 14,
                color: "#b6d0ed",
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
                color: "#1d7682",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Wealth Management
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Investment Management", href: "/services/investments" },
                { label: "Financial Planning", href: "/services/financial-planning" },
                { label: "Tax Optimization", href: "/services/tax-optimization" },
                { label: "Estate Planning", href: "/services/trust-estate" },
                { label: "Retirement Planning", href: "/services/retirement-planning" },
                { label: "Business Owner Services", href: "/services/business-owners" },
                { label: "401(k) & Qualified Plans", href: "/services/401k" },
                { label: "Alternative Investments", href: "/services/alternatives" },
                { label: "Generational Wealth", href: "/services/generational-wealth" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: 14,
                      color: "#b6d0ed",
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
                color: "#1d7682",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Our Locations
            </h4>

            {/* Scottsdale NAP Block */}
            <div
              itemScope
              itemType="https://schema.org/FinancialService"
              style={{ marginBottom: 20 }}
            >
              <Link
                href="/scottsdale"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#F7F4EE",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: 4,
                  transition: "color 0.15s",
                }}
                className="footer-link"
              >
                <span itemProp="name">Scottsdale Office</span>
              </Link>
              <div
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "#b6d0ed",
                  lineHeight: 1.7,
                }}
              >
                <span itemProp="addressLocality">Scottsdale</span>,{" "}
                <span itemProp="addressRegion">AZ</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: 12,
                  fontWeight: 300,
                  color: "#b6d0ed",
                  marginTop: 2,
                }}
              >
                Advisory services available in states where Farther maintains proper registration or notice filing
              </div>
            </div>

            {/* Hours */}
            <div
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 12,
                fontWeight: 300,
                color: "#b6d0ed",
                marginTop: 8,
                borderTop: "1px solid rgba(29, 118, 130, 0.15)",
                paddingTop: 12,
              }}
            >
              <div style={{ fontWeight: 500, color: "#F7F4EE", marginBottom: 4 }}>
                Hours
              </div>
              Monday – Friday: 8:00 AM – 5:00 PM
              <br />
              Evenings &amp; weekends by appointment
            </div>
          </div>

          {/* Column 4: Start a Conversation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#1d7682",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Start a Conversation
            </h4>

            <a
              href="tel:+14809440880"
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
              (480) 944-0880
            </a>

            <a
              href="mailto:jay.chang@farther.com"
              style={{
                display: "block",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 14,
                color: "#b6d0ed",
                textDecoration: "none",
                marginBottom: 24,
              }}
            >
              jay.chang@farther.com
            </a>

            <Link
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              style={{
                display: "block",
                width: "100%",
                background: "linear-gradient(to bottom, #2a9dab, #1d7682)",
                color: "#F7F4EE",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 15,
                fontWeight: 600,
                padding: "16px 0",
                borderRadius: 9999,
                textAlign: "center",
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxSizing: "border-box",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25), 0 2px 8px rgba(29,118,130,0.3)",
              }}
              className="footer-cta"
            >
              Reach Out Privately
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(29, 118, 130, 0.1)",
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
                color: "#b6d0ed",
                margin: 0,
              }}
            >
              &copy; 2026 Farther Finance Advisors, LLC. All rights
              reserved.
            </p>

            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 12,
                color: "#b6d0ed",
              }}
            >
              <Link
                href="/disclosures#privacy"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">&middot;</span>
              <Link
                href="/disclosures#terms"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Terms of Service
              </Link>
              <span aria-hidden="true">&middot;</span>
              <a
                href="/documents/FFA-ADV-Packet-2.6.26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Form ADV Part 2A
              </a>
              <span aria-hidden="true">&middot;</span>
              <a
                href="/documents/FFA-ADV-Packet-2.6.26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Form CRS
              </a>
              <span aria-hidden="true">&middot;</span>
              <Link
                href="/disclosures"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Disclosures
              </Link>
            </div>
          </div>

          {/* Important Disclosures */}
          <div
            style={{
              marginTop: 24,
              textAlign: "center",
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 11,
              fontWeight: 300,
              color: "#b6d0ed",
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.7,
            }}
          >
            <p style={{ fontWeight: 500, color: "#F7F4EE", marginBottom: 8, fontSize: 12 }}>
              Important Disclosures
            </p>
            <p>
              Advisory services are provided by <strong>Farther Finance Advisors, LLC</strong> (&ldquo;Farther&rdquo;), an SEC-registered investment adviser (CRD# 302050). Registration with the SEC does not imply a certain level of skill or training. All investments involve risk, including the possible loss of principal. Past performance does not guarantee future results.
            </p>
            <p style={{ marginTop: 12 }}>
              The information on this website is for informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation for any security or investment strategy. Nothing on this site should be construed as investment, tax, or legal advice. Consult with qualified professionals regarding your specific situation.
            </p>
            <p style={{ marginTop: 12 }}>
              The annual advisory fee for Farther&rsquo;s Wrap Program generally ranges from <strong>0.35% to 1.50%</strong> of assets under management, depending on account complexity, services, and total client assets. Fees and costs will reduce the net return on your investments over time. For full details on fees, services, conflicts of interest, and disciplinary history, please review Farther&rsquo;s{" "}
              <a
                href="https://reports.adviserinfo.sec.gov/reports/ADV/302050/PDF/302050.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b6d0ed", textDecoration: "underline" }}
                className="footer-bottom-link"
              >
                Form ADV Part 2A Brochure
              </a>
              {" "}and{" "}
              <a
                href="https://adviserinfo.sec.gov/firm/summary/302050"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b6d0ed", textDecoration: "underline" }}
                className="footer-bottom-link"
              >
                Form CRS
              </a>
              .
            </p>
            <p style={{ marginTop: 12 }}>
              Additional information about Farther and its financial professionals is available at{" "}
              <a
                href="https://adviserinfo.sec.gov"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b6d0ed", textDecoration: "underline" }}
                className="footer-bottom-link"
              >
                www.adviserinfo.sec.gov
              </a>
              {" "}and{" "}
              <a
                href="https://www.investor.gov/CRS"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b6d0ed", textDecoration: "underline" }}
                className="footer-bottom-link"
              >
                www.investor.gov/CRS
              </a>
              .
            </p>
            <p style={{ marginTop: 12 }}>
              Jay Chang is an investment adviser representative of Farther Finance Advisors, LLC. Farther Finance Advisors, LLC is a Delaware limited liability company.
            </p>
            <p style={{ marginTop: 12 }}>
              $15B in assets under management reflects total platform AUM across Farther Finance Inc. as of January 2026 and is not representative of any individual advisor&rsquo;s practice.
            </p>
            <p style={{ marginTop: 16 }}>
              <strong>Trademark Notice:</strong> All company names, logos, and trademarks referenced on this website &mdash; including but not limited to TSMC, Intel, NVIDIA, Apple, Microchip Technology, Amkor Technology, Honeywell, Raytheon/RTX, Banner Health, Mayo Clinic, Freeport-McMoRan, Kaiser Permanente, Vanguard, and Charles Schwab &mdash; are the property of their respective owners. Their use on this site is for identification and informational purposes only and does not imply endorsement, affiliation, sponsorship, or any business relationship between those companies and Jay Chang or Farther Finance Advisors, LLC.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .footer-linkedin-link:hover {
              color: #1d7682 !important;
            }
            .footer-link:hover {
              color: #F7F4EE !important;
            }
            .footer-cta:hover {
              background: linear-gradient(to bottom, #238a97, #155f69) !important;
              box-shadow: inset 0 1px 1px rgba(255,255,255,0.25), 0 8px 24px rgba(29,118,130,0.4) !important;
            }
            .footer-bottom-link:hover {
              color: #F7F4EE !important;
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
