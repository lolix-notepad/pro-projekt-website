import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function SingUp() {
  return (
    <div className="">
      <Head>
        <title>SingIn</title>
        <meta name="description" content="Sing in form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container bg-gray-100 px-4 py-4 mt-6">
        <h1 className="text-center">
          Sing In
        </h1>
        <p>
          This is a form to be register
        </p>
      </main>

    </div>
  )
}
