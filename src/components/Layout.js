import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-[90%]">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Layout;
