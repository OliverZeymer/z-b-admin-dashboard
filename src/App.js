import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Order from "./pages/Order"
import Customers from "./pages/Customers"
import Customer from "./pages/Customer"
import Products from "./pages/Products"
import Product from "./pages/Product"
import tokenContext from "./contexts/tokenContext"
import Layout from "./components/Layout"
import { useState } from "react"

function App() {
  const [token, setToken] = useState(false)
  return (
    <tokenContext.Provider value={{ token, setToken }}>
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
    </tokenContext.Provider>
  )
}

export default App
