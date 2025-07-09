// app/not-found.js
import Link from 'next/link';
import styles from '../app/styles/not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                404 - Seite nicht gefunden
            </h1>
            <p className={styles.description}>
                Entschuldigung, die von Ihnen angeforderte Seite konnte nicht gefunden werden.
                Es scheint, als wäre sie entweder verschoben, gelöscht oder existiert gar nicht.
            </p>
            <Link href="/" className={styles.link}>
                Zur Startseite zurückkehren
            </Link>
            <p className={styles.contactText}>
                Wenn Sie der Meinung sind, dass dies ein Fehler ist, kontaktieren Sie uns bitte.
            </p>
        </div>
    );
}