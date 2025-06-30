import React from "react";
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
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
