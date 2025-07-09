import React from "react";
import styles from "../styles/components/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                &copy; {new Date().getFullYear()} Digitalista e.V.
            </a>
        </footer>
    );
}
