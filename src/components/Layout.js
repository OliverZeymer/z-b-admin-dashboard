import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NotificationWidget from "./NotificationWidget";
const Layout = () => {
  return (
    <div className="sm:flex">
      <Navbar />
      <NotificationWidget />
      <div className="mx-auto w-[90%] relative">
        <main className="w-[90%] mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
