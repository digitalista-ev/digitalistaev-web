import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./styles/layout.module.css";

const faviconUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`;
const imageUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/og-image.jpg`;

export const metadata = {
  metadataBase: new URL("https://digitalista-ev.de"),
  title: "Digitalista – Machinery help for humans",
  description: "Digitalista - Unsere Projekte und Dokumente",
  keywords: ["Digitalista", "Ehrenamt", "Digitalisierung", "Projekte", "Spenden", "Verein"],
  authors: [{ name: "Digitalista e.V." }],
  openGraph: {
    title: "Digitalista – Machinery help for humans",
    description: "Digitalista - Unsere Projekte und Dokumente",
    type: "website",
    url: "https://digitalista-ev.de",
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalista – Machinery help for humans",
    description: "Digitalista - Unsere Projekte und Dokumente",
    images: [imageUrl],
  },
  icons: {
    icon: [
      { url: faviconUrl, type: "image/x-icon" },
    ],
  },
  alternates: {
    canonical: "https://digitalista-ev.de",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }) {
  return (
    <html lang="de">
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
