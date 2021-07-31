import Head from 'next/head'
// import Image from 'next/image'
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

      <main className="container bg-gray-100 px-12 py-12 mt-6">
        <div className="w-1/3 h-1/2 bg-white rounded px-12 py-14 mx-auto my-auto">
          <h1 className="text-3xl text-center mb-14 mt-4">
            Sing In
          </h1>
          <div className="mx-auto bkg-red-400 w-auto h-auto flex flex-col space-y-10">
            <div className="mx-full my-auto">
              <label className="block w-auto mb-4">
                User
              </label>
              <input className="w-full text-gray-700 px-4 py-2 rounded bg-gray-100" placeholder="enter your user" />
            </div>
            <div className="mx-full my-auto">
              <label className="block w-auto mb-4">
                Password
              </label>
              <input className="w-full text-gray-700 px-4 py-2 rounded bg-gray-100" placeholder="enter your password" />
            </div>
            <button className="bg-yellow-500 font-bold rounded w-full text-white px-4 py-2 hover:bg-yellow-600">
              Send
            </button>
          </div>
        </div>
      </main>

    </div>
  )
}
