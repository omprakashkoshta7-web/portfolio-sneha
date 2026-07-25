import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ParticleBackground from "@/components/ui/ParticleBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sneha Koshta | Full Stack Developer",
  description:
    "Portfolio of Sneha Koshta — Full Stack Developer specializing in React, Node.js, ASP.NET Core, TypeScript, MongoDB, and cloud-powered solutions. Building scalable web apps, REST APIs, and modern UIs.",
  keywords: [
    "Sneha Koshta",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "ASP.NET Core",
    "TypeScript",
    "MongoDB",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
    "India",
  ],
  authors: [{ name: "Sneha Koshta" }],
  creator: "Sneha Koshta",
  openGraph: {
    title: "Sneha Koshta | Full Stack Developer",
    description:
      "Building scalable web applications, REST APIs, cloud-powered solutions, and modern user experiences.",
    url: "https://sneha-koshta.vercel.app",
    siteName: "Sneha Koshta Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneha Koshta | Full Stack Developer",
    description:
      "Building scalable web applications, REST APIs, cloud-powered solutions, and modern user experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} antialiased bg-[#0b0b0b]`}>
        <LoadingScreen />
        <ParticleBackground />
        <div className="noise-overlay" />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
