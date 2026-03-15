import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Resources | Personal Wealth Management at Farther",
  description:
    "Access the latest wealth management resources, guides, and insights from Farther — your partner in intelligent wealth planning.",
  openGraph: {
    title: "Client Resources | Personal Wealth Management at Farther",
    description:
      "Access the latest wealth management resources, guides, and insights from Farther.",
  },
};

export default function ClientResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#333333",
          padding: "80px 40px 48px",
          textAlign: "center",
        }}
      >
        <p
          className="font-sans"
          style={{
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#1d7682",
            marginBottom: 16,
          }}
        >
          Client Resources
        </p>
        <h1
          className="font-serif"
          style={{
            fontSize: 48,
            fontWeight: 300,
            color: "#F7F4EE",
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: 680,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Wealth Management Resources
        </h1>
        <p
          className="font-sans"
          style={{
            fontSize: 18,
            color: "#b6d0ed",
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Stay informed with the latest guides, market insights, and planning
          tools from the Farther platform.
        </p>
      </section>

      {/* Iframe Section */}
      <section
        style={{
          backgroundColor: "#F7F4EE",
          minHeight: "80vh",
        }}
      >
        <iframe
          src="https://www.farther.com/resources"
          title="Farther Client Resources"
          style={{
            width: "100%",
            height: "calc(100vh - 200px)",
            minHeight: 600,
            border: "none",
            display: "block",
          }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
        />
      </section>

      {/* Fallback CTA */}
      <section
        style={{
          backgroundColor: "#333333",
          padding: "48px 40px",
          textAlign: "center",
        }}
      >
        <p
          className="font-sans"
          style={{
            fontSize: 16,
            color: "#F7F4EE",
            marginBottom: 20,
          }}
        >
          Can&rsquo;t see the resources above? Visit them directly.
        </p>
        <a
          href="https://www.farther.com/resources"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 15,
            fontWeight: 500,
            color: "#F7F4EE",
            backgroundColor: "#1d7682",
            border: "none",
            borderRadius: 2,
            padding: "14px 32px",
            textDecoration: "none",
          }}
        >
          View Resources on Farther.com
        </a>
      </section>
    </>
  );
}
