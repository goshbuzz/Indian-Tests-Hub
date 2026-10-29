import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { JsonLd } from "@/components/JsonLd";
import {
  DEFAULT_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";
import { LOGO_SRC } from "@/lib/brand";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Government jobs & test prep India`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  manifest: "/manifest.json",
  // NOTE: no `alternates.canonical` here on purpose. A root-level canonical used to be
  // inherited by every page that forgot its own, which made /start, /profile,
  // /leaderboard etc. look like exact duplicates of the homepage to Google. Each page
  // (and each page layout) now declares its own unique title + canonical.
  // OG title/description/url are left unset so they fall through to each page's own
  // metadata. The share image is a 1424×752 (~1.9:1, OG-recommended) brand cover.
  openGraph: {
    locale: "en_IN",
    siteName: SITE_NAME,
    images: [{ url: "/og-cover.png", width: 1424, height: 752, alt: `${SITE_NAME} — free India test prep hub` }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: {
    // Real, correctly-sized favicons (the 1024px /logo.png used to be served as a
    // 512px "favicon", which Google's favicon crawler rejects). Google wants a
    // square icon that is a multiple of 48px — /favicon.ico carries 48/32/16.
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/icon-192.png?v=4", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png?v=4", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=4", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    title: "IN Tests",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#01411C",
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["IN Tests", "Indian Tests Hub"],
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_SRC}`,
  description: SITE_TAGLINE,
  areaServed: { "@type": "Country", name: "India" },
  audience: ["Student", "Job seeker", "Graduate"],
  knowsAbout: DEFAULT_KEYWORDS,
  inLanguage: ["en", "hi"],
};

const webLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
  inLanguage: ["en-IN", "hi-IN"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/explore?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// Site-wide schema is limited to Organization + WebSearch-capable WebSite. The FAQPage
// schema used to be emitted on EVERY page here, which (a) duplicated the same Q&A
// across the whole site — weakening each page's distinct identity — and (b) mismatched
// the visible content on non-FAQ pages. Each FAQ-rich page now ships its own FAQPage:
// /faq with GLOBAL_FAQS, the home page with its own shorter question set.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head />
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <JsonLd data={[orgLd, webLd]} />
        <Script id="pth-bip" strategy="beforeInteractive">{`window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();window.__pthBIP=e;});`}</Script>
        <Providers>{children}</Providers>
        
      </body>
    </html>
  );
}
