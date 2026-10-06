import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/ui/AIChatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: {
    default: "CareNura | Premium Digital Engineering & AI Agency",
    template: "%s | CareNura",
  },
  description: "We build intelligent digital solutions that help businesses work smarter, grow faster and scale.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CareNura",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CareNura",
    "url": process.env.SITE_URL || 'http://localhost:3000',
    "description": "Premium Digital Engineering & AI Agency",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CareNura",
    "url": process.env.SITE_URL || 'http://localhost:3000',
  };

  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col", inter.variable, spaceGrotesk.variable)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
