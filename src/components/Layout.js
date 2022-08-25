import { useContext } from "react";
import { Outlet } from "react-router-dom";
import TokenContext from "../contexts/tokenContext";
import Navbar from "./Navbar";
const Layout = () => {
  const { setToken } = useContext(TokenContext);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
