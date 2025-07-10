import React from "react";
import Image from "next/image";
import styles from "../styles/components/projekte.module.css";

export default function Projekte() {
    return (
        <section id="projekte" className={styles.section}>
            <h2>Unsere Projekte</h2>
            <a
                className={styles.infobox}
                href="https://digitalvolunteers.de/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/image_2023-02-13_203311065.png`}
                    alt="Digital Volunteers"
                    width={100}
                    height={100}
                />
                <div>
                    <h2>Digital Volunteers</h2>
                </div>
            </a>
        </section>
    );
}
