import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chylux Studio | Web Development & Design",
  description:
    "We build, fix, and modernize websites for businesses that need a strong online presence. From e-commerce to logistics — we deliver.",
  keywords: ["web development", "website design", "Laravel", "Next.js", "React"],
  authors: [{ name: "Chylux Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chylux.studio",
    siteName: "Chylux Studio",
    title: "Chylux Studio | Web Development & Design",
    description:
      "We build, fix, and modernize websites for businesses that need a strong online presence.",
    images: [
      {
        url: "https://chylux.studio/og.jpg",
        width: 1200,
        height: 630,
        alt: "Chylux Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chylux Studio | Web Development & Design",
    description:
      "We build, fix, and modernize websites for businesses that need a strong online presence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border)] bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold tracking-tight">
              Chylux
              <span className="text-indigo-500">.</span>
            </span>
            <p className="text-sm text-[var(--muted-foreground)] mt-1">
              Building the web, one site at a time.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-sm text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Chylux Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}