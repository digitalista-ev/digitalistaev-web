import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export function loadMarkdown(relativePath) {
    const filePath = path.join(process.cwd(), "app", ...relativePath.split("/"));

    if (!fs.existsSync(filePath)) {
        return `
      <div style="color: #dc2626; font-weight: bold;">
        Fehler: Die Datei <b><u>${relativePath}</b></u> mit dem Markdown-Text wurde nicht gefunden.
      </div>
    `;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);

    // github_dev_path -> {${process.env.NEXT_PUBLIC_BASE_PATH || ''}
    const githubDevPath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const replacedContent = content.replace(/{{\s*github_dev_path\s*}}/g, githubDevPath);

    return marked(replacedContent);
}
