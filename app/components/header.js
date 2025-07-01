import React from "react";
import styles from "../styles/components/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Digitalista e.V.</h1>
            <nav>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#projekte`}>Projekte</a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#spenden`}>Spenden</a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#dokumente`}>Dokumente</a>
            </nav>
        </header>
    );
}
