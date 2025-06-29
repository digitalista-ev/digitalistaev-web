import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          //src="/next.svg"
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/next.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          unoptimized
        />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              //src="/vercel.svg"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vercel.svg`}
              alt="Vercel logomark"
              width={20}
              height={20}
              unoptimized
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            //src="/file.svg"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
            unoptimized
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            //src="/window.svg"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/window.svg`}
            alt="Window icon"
            width={16}
            height={16}
            unoptimized
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            //src="/globe.svg"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/globe.svg`}
            alt="Globe icon"
            width={16}
            height={16}
            unoptimized
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
