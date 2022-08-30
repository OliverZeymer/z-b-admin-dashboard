import Theme from "./Theme";
import {
  BsFillGrid1X2Fill,
  BsStickiesFill,
  BsFillPeopleFill,
  BsPlusCircle,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <aside className="hidden sm:block sticky left-0 w-[230px] h-screen bg-primary-theme">
          <div className="nav__wrapper w-4/5 mx-auto py-8">
            <h1 className="text-primary-color text-3xl font-semibold">
              Eligöten.
            </h1>
            <ul className="flex justify-between gap-12 flex-col mt-24">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                    : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                }
                to="/orders"
              >
                <BsFillGrid1X2Fill size="24" /> Orders
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                    : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                }
                to="/customers"
              >
                <BsFillPeopleFill size="24" />
                Customers
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                    : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                }
                to="/products"
              >
                <BsStickiesFill size="24" />
                Product Control
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "text-primary-color gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                    : "text-primary-text gap-4 cursor-pointer hover:scale-105 transition-all text-[16px] flex font-medium"
                }
                to="/product/1"
              >
                <BsPlusCircle size="24" />
                Add/edit Product
              </NavLink>
            </ul>
            <Theme />
          </div>
        </aside>
      </nav>
      <nav className="fixed block sm:hidden bottom-0 w-full bg-primary-theme shadow-2xl">
        <ul className="flex justify-between px-6 m-4">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer transition-all text-[16px] flex font-medium"
            }
            to="/orders"
          >
            <BsFillGrid1X2Fill size="32" />
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer transition-all text-[16px] flex font-medium"
            }
            to="/customers"
          >
            <BsFillPeopleFill size="32" />
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer transition-all text-[16px] flex font-medium"
                : "text-primary-text gap-4 cursor-pointer transition-all text-[16px] flex font-medium"
            }
            to="/products"
          >
            <BsStickiesFill size="32" />
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-primary-color gap-4 cursor-pointer transition-all text-[16px] flex font-medium before:content-none"
                : "text-primary-text gap-4 cursor-pointer transition-all text-[16px] flex font-medium"
            }
            to="/product/1"
          >
            <BsPlusCircle size="32" />
          </NavLink>
          <Theme />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
