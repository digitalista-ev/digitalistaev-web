import React from "react";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./styles/layout.module.css";

export const metadata = {
  title: "Digitalista e.V.",
  description: "Digitalista - Unsere Projekte und Dokumente",
};

export default function Layout({ children }) {
  return (
    <html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Digitalista e.V.</title>
        <meta name="description" content="Digitalista - Unsere Projekte und Dokumente" />
        <meta name="keywords" content="Digitalista, Ehrenamt, Digitalisierung, Projekte, Spenden, Verein" />
        <meta name="author" content="Digitalista e.V." />

        {/* OpenGraph */}
        <meta property="og:title" content="Digitalista e.V." />
        <meta property="og:description" content="Digitalista - Unsere Projekte und Dokumente" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitalista-ev.de" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digitalista e.V." />
        <meta name="twitter:description" content="Digitalista - Unsere Projekte und Dokumente" />
        <meta name="twitter:image" content="/images/og-image.jpg" />

        {/* Canonical & Favicon */}
        <link rel="canonical" href="https://digitalista-ev.de" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
