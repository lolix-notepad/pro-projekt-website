import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Carousel from '../components/carousel'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home, Pro projetk is a website where you can find the lastest job offers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <div className="bkg-red-400 h-screen flex items-center relative">
        <div className="ml-16 bkg-red-400 py-16 w-2/6">
          <h2 className="mb-8 text-yellow-500 text-bold text-3xl">
            Pro projekt
          </h2>
          <p>
            In this website you can find all the things that you need.
            In this website you can find all the things that you need.
            In this website you can find all the things that you need.
            In this website you can find all the things that you need.
            In this website you can find all the things that you need.
            In this website you can find all the things that you need.
          </p>
        </div>
        <div className="w-1/2 square absolute right-0 bottom-0 bg-blue-300 rounded-full"></div>
      </div>
    </div>
  )
}
