import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import NotificationWidget from "./NotificationWidget"

const Layout = () => {
  return (
    <div className="mx-auto w-[90%] relative">
      <Navbar />
      <NotificationWidget />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default Layout
