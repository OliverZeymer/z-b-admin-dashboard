import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NotificationWidget from "./NotificationWidget";
const Layout = () => {
  return (
    <div className="sm:flex">
      <Navbar />
      <NotificationWidget />
      <div className="mx-auto w-[90%] relative">
        <main>
          <Outlet />

          <h1 className="text-primary-text">lort</h1>
        </main>
      </div>
    </div>
  );
};
export default Layout;
