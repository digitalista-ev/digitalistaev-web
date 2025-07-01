import React from "react";
import Logo from "./components/logo";
//import Projekte from "./components/projekte";
//import Spenden from "./components/spenden";
//import Dokumente from "./components/dokumente";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "./styles/markdown.css";

/*
export default function Page() {
  return (
    <>
      <Logo />
      <Projekte />
      <Spenden />
      <Dokumente />
    </>
  );
}
*/

export default async function Page() {
  const filePath = path.join(process.cwd(), "app", "page.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  // github_dev_path -> {`${process.env.NEXT_PUBLIC_BASE_PATH || ''}
  const githubDevPath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const replacedContent = content.replace(/{{\s*github_dev_path\s*}}/g, githubDevPath);
  const html = marked(replacedContent);

  return (
    <main className="prose mx-auto p-4">
      <Logo />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
