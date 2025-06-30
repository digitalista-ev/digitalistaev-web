import React from "react";
import Image from "next/image";
import styles from "../styles/components/logo.module.css";

export default function Logo() {
    return (
        <figure className={styles.logo}>
            <Image
                src="https://digitalista-ev.de/wp-content/uploads/2023/02/logo-1-1024x430.png"
                alt="Digitalista Logo"
                width={1024}
                height={430}
                style={{ width: "100%", height: "auto" }}
                priority
            />
        </figure>
    );
}
