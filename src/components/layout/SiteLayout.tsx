import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function SiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
