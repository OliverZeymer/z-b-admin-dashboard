import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
const Layout = () => {
  return (
    <div className="mx-auto w-[90%]">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default Layout
