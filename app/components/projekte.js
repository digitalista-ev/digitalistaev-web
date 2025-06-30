import React from "react";
import Image from "next/image";
import styles from "../styles/components/projekte.module.css";

export default function Projekte() {
    return (
        <section id="projekte" className={styles.section}>
            <h3>Unsere Projekte</h3>
            <a
                className={styles.infobox}
                href="https://digitalvolunteers.de/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="https://digitalista-ev.de/wp-content/uploads/2023/02/image_2023-02-13_203311065.png"
                    alt="Digital Volunteers"
                    width={100}
                    height={100}
                />
                <div>
                    <h3>Digital Volunteers</h3>
                </div>
            </a>
        </section>
    );
}
