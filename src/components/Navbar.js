import {
  BsFillGrid1X2Fill,
  BsStickiesFill,
  BsFillPeopleFill,
  BsPlusCircle,
  BsBrightnessHigh,
} from "react-icons/bs"
import { NavLink, Link } from "react-router-dom"
import { useContext } from "react"
import themeContext from "../contexts/themeContext"
import { setToLS } from "../functions/setToLS"

const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext)
  setToLS("theme", theme)
  return (
    <nav className="z-40 flex fixed sm:static sm:block bottom-0 w-screen select-none sm:w-[260px] sm:min-h-screen sm:max-h-full bg-primary-theme">
      <div className="wrapper h-full w-10/12 sm:w-4/5 mx-auto py-4 sm:py-8">
        <ul className="flex justify-between sm:gap-12 sm:flex-col sm:h-full">
          <Link className="hidden sm:block" to="/">
            <h1 className=" text-primary-color text-3xl font-semibold mb-12">
              Eligöten.
            </h1>
          </Link>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/"
          >
            <BsFillGrid1X2Fill className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />{" "}
            <p className="hidden sm:block">Orders</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/customers"
          >
            <BsFillPeopleFill className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Customers</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/products"
          >
            <BsStickiesFill className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Product Control</p>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
            }
            to="/product/add"
          >
            <BsPlusCircle className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Add Product</p>
          </NavLink>
          <button
            className="text-[16px] gap-4 flex font-medium hover:scale-105 transition-all items-center text-primary-text mt-auto"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light")
            }}
          >
            <BsBrightnessHigh className="w-[32px] h-[32px] sm:w-[24px] sm:h-[24px]" />
            <p className="hidden sm:block">Toggle Theme</p>
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
