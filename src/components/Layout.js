import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NotificationWidget from "./NotificationWidget";
const Layout = () => {
  return (
    <>
      <Navbar />
      <NotificationWidget />
      <div className="mx-auto w-[90%] relative">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
