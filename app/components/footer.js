import React from "react";
import styles from "../styles/components/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()} Digitalista e.V. |{" "}
                <a href="/datenschutzerklaerung">Datenschutzerklärung</a>
            </p>
        </footer>
    );
}
