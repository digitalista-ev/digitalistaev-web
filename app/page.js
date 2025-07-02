import React from "react";
import Logo from "./components/logo";
import styles from "./styles/markdown.css";
import { loadMarkdown } from "./components/loadMarkdown";

export const dynamic = 'force-static';
export const metadata = { title: "Digitalista e.V." };

const html = loadMarkdown("page.md");

export default function Page() {
  return (
    <main className="prose mx-auto p-4">
      <Logo />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
