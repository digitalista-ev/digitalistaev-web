import React from "react";
import Image from "next/image";
import styles from "../styles/components/logo.module.css";

export default function Logo() {
    return (
        <figure className={styles.logo}>
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-1.png`}
                alt="Digitalista Logo"
                width={1024}
                height={430}
                style={{ width: "100%", height: "auto" }}
                priority
            />
        </figure>
    );
}
