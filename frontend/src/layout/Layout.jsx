import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/user/Footer"

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout