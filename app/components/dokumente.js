import React from "react";
import styles from "../styles/components/dokumente.module.css";

export default function Dokumente() {
    return (
        <section id="dokumente" className={styles.section}>
            <h3>Dokumente</h3>
            <p>Vereins Dokumente herunterladen:</p>
            <ul>
                <li>
                    <a
                        href="/Satzung-2022-08-23.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Satzung
                    </a>
                </li>
                <li>
                    <a href="/Beitragsordnung-Digitalista-e.V.-2023-02-13.pdf">
                        Beitragsordnung
                    </a>
                </li>
                <li>Aufnahmeantrag</li>
            </ul>
        </section>
    );
}
