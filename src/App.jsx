import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Deals from "./pages/Deals";
import BestSellers from "./pages/BestSellers";
import Trending from "./pages/Trending";
import GiftCards from "./pages/GiftCards";
import CustomerService from "./pages/CustomerService";
import Sell from "./pages/Sell";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
  // ==============================
  // CART STATE
  // ==============================

  const [cart, setCart] = useState([]);

  // ==============================
  // SEARCH STATE
  // ==============================

  const [search, setSearch] = useState("");

  // ==============================
  // ADD PRODUCT TO CART
  // ==============================

  const addToCart = (product) => {
    setCart((previousCart) => [
      ...previousCart,
      product,
    ]);
  };

  // ==============================
  // REMOVE PRODUCT FROM CART
  // ==============================

  const removeFromCart = (index) => {
    setCart((previousCart) =>
      previousCart.filter(
        (_, productIndex) =>
          productIndex !== index
      )
    );
  };

  return (
    <BrowserRouter>

      {/* ==========================
          NAVIGATION BAR
      ========================== */}

      <Navbar
        cartCount={cart.length}
        search={search}
        setSearch={setSearch}
      />

      {/* ==========================
          ALL WEBSITE PAGES
      ========================== */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              search={search}
            />
          }
        />

        {/* TODAY'S DEALS */}

        <Route
          path="/deals"
          element={
            <Deals
              addToCart={addToCart}
            />
          }
        />

        {/* BEST SELLERS */}

        <Route
          path="/best-sellers"
          element={
            <BestSellers
              addToCart={addToCart}
            />
          }
        />

        {/* TRENDING */}

        <Route
          path="/trending"
          element={
            <Trending
              addToCart={addToCart}
            />
          }
        />

        {/* GIFT CARDS */}

        <Route
          path="/gift-cards"
          element={
            <GiftCards />
          }
        />

        {/* CUSTOMER SERVICE */}

        <Route
          path="/customer-service"
          element={
            <CustomerService />
          }
        />

        {/* SELL */}

        <Route
          path="/sell"
          element={
            <Sell />
          }
        />

        {/* CART */}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

        {/* FALLBACK */}

        <Route
          path="*"
          element={
            <Home
              addToCart={addToCart}
              search={search}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;