import React from "react";
import styles from "../styles/components/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Digitalista e.V.</h1>
            <nav>
                <a href="/#projekte">Projekte</a>
                <a href="/#spenden">Spenden</a>
                <a href="/#dokumente">Dokumente</a>
            </nav>
        </header>
    );
}
