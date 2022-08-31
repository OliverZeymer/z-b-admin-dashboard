import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import tokenContext from "./contexts/tokenContext";
import notificationContext from "./contexts/notificationContext";
import Layout from "./components/Layout";
import { useState } from "react";
import themeContext from "./contexts/themeContext";
import { setColors } from "./functions/setColors";
function App() {
  const [token, setToken] = useState(true);

  /*-------------THEME LOCAL STORAGE---------- */
  const themeLS = JSON.parse(window.localStorage.getItem("theme"));
  const [savedTheme] = useState(themeLS);
  const [theme, setTheme] = useState(savedTheme || "light");
  const [notification, setNotification] = useState([]);

  setColors(
    theme === "dark" ? "var(--darkmode-color)" : "",
    theme === "dark" ? "var(--darkmode-text)" : "",
    theme === "dark" ? "var(--darkmode-background)" : "",
    theme === "dark" ? "var(--darkmode-theme)" : "",
    theme === "dark" ? "var(--darkmode-input)" : ""
  );
  /*------------------------------------------*/

  return (
    <notificationContext.Provider value={{ notification, setNotification }}>
      <tokenContext.Provider value={{ token, setToken }}>
        <themeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Routes>
              {token ? (
                <Route path="/" default element={<Layout />}>
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/order/:id" element={<Order />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/customer/:id" element={<Customer />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<Product />} />
                </Route>
              ) : (
                <Route path="/" default element={<Login />} />
              )}
            </Routes>
          </BrowserRouter>
        </themeContext.Provider>
      </tokenContext.Provider>
    </notificationContext.Provider>
  );
}

export default App;
