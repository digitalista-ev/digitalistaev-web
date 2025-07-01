import React from "react";
import styles from "../styles/components/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Digitalista e.V.</h1>
            </a>
            <nav>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`}>Startseite</a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/impressum`}>Impressum</a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/datenschutzerklaerung`}>Datenschutzerklärung</a>
            </nav>
        </header>
    );
}
