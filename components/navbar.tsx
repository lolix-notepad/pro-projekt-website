import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
      <nav className="w-full h-20 z-10 sticky bg-white top-0 bkg-red-800 px-4 py-4 flex items-center">
          <div className="bgk-green-900 inline-block">
            <Link className="" href="/">
              <p className="cursor-pointer text-xl inline">
                Pro projekt
              </p>
            </Link>
          </div>

          <div className="ml-auto space-x-2 bgk-blue-400 inline-block">
            <Link href="/sing-in">
              <p className="cursor-pointer inline">
                sing in
              </p>
            </Link>
            <Link className="" href="/sing-up">
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-bold text-white">
                sing up
              </button>
            </Link>
          </div>
      </nav>
    )
}
