import React from "react";
import { loadMarkdown } from "../components/loadMarkdown";

export const dynamic = 'force-static';
export const metadata = { title: "Impressum" }; // Impressum

const html = loadMarkdown("impressum/page.md"); // impressum

export default function ImpressumPage() {
    return (
        <main className="prose mx-auto p-4">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
    );
}
