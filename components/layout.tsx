import NavBar from './navbar'
import Footer from './footer'
import HelpButton from './help-button'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
