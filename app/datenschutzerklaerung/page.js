import React from "react";
import { loadMarkdown } from "../components/loadMarkdown";

export const dynamic = 'force-static';
export const metadata = { title: "Datenschutzerklärung" }; // Datenschutzerklärung

const html = loadMarkdown("datenschutzerklaerung/page.md"); // datenschutzerklaerung

export default function DatenschutzerklaerungPage() {
    return (
        <main className="prose mx-auto p-4">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
    );
}
