import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/chrome";
import "./globals.css";
import "./skip-link.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const safeSiteUrl = siteUrl && /^https:\/\//i.test(siteUrl) ? siteUrl.replace(/\/$/, "") : undefined;
const socialImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519664011484566/YFNtQDwIyDzNRnIE.png";

export const metadata: Metadata = {
  metadataBase: safeSiteUrl ? new URL(safeSiteUrl) : undefined,
  title: {
    default: "Eclipse Build | Premium Websites from ₹9,999 in India",
    template: "%s | Eclipse Build",
  },
  description: "Premium-looking, mobile-first websites for Indian businesses, startups and independent brands. Clear scope, thoughtful design and eligible projects starting at ₹9,999.",
  keywords: ["affordable website development in India", "premium website design under ₹10,000", "business website development", "custom website developer", "landing page development", "startup website design"],
  applicationName: "Eclipse Build",
  creator: "Eclipse Build",
  openGraph: {
    type: "website", siteName: "Eclipse Build", title: "Premium Websites. Without the Premium Price.",
    description: "Modern, high-performance websites for India's growing businesses. Eligible projects start at ₹9,999.",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Eclipse Build — premium websites for growing businesses" }],
    ...(safeSiteUrl ? { url: safeSiteUrl } : {}),
  },
  twitter: { card: "summary_large_image", title: "Premium Websites. Without the Premium Price.", description: "Modern websites for Indian businesses. Eligible projects start at ₹9,999.", images: [socialImage] },
  alternates: safeSiteUrl ? { canonical: "/" } : undefined,
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08090c", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en-IN"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
