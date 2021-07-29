import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function SingUp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SingUp</title>
        <meta name="description" content="Sing up form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sing Up
        </h1>
        <p>
          This is a form to be register
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
