import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NotificationWidget from "./NotificationWidget";
import Search from "./Search";
const Layout = () => {
  return (
    <div className="sm:flex">
      <Navbar />
      <NotificationWidget />
      <div className="mx-auto w-[90%] relative">
        <main>
          <Search placeholder="Enter Customer ID, Date, Customer" />
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
