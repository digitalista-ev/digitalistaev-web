import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default async function DatenschutzPage() {
    const filePath = path.join(process.cwd(), "app", "datenschutzerklaerung", "page.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);
    const html = marked(content);

    return (
        <main className="prose mx-auto p-4">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
    );
}
