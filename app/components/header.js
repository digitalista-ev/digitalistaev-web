import React from "react";
import styles from "../styles/components/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="https://digitalista-ev.de/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Digitalista e.V.</h1>
            </a>
            <nav>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#projekte`}>Projekte</a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#spenden`}>Spenden</a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#dokumente`}>Dokumente</a>
            </nav>
        </header>
    );
}
