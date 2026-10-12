import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartCount, search, setSearch }) {
  const navigate = useNavigate();

  return (
    <>
      <header className="navbar">

        {/* LOGO */}

        <Link to="/" className="logo">
          Shop<span>Zone</span>
        </Link>


        {/* LOCATION */}

        <div className="location">
          📍

          <div>
            <small>Deliver to</small>
            <strong>India</strong>
          </div>
        </div>


        {/* SEARCH */}

        <div className="search-container">

          <select>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Computers</option>
            <option>Books</option>
            <option>Sports</option>
          </select>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <button
            onClick={() => navigate("/search")}
          >
            🔍
          </button>

        </div>


        {/* ACCOUNT */}

        <Link to="/account" className="nav-item">
          <small>Hello, Sign in</small>
          <strong>Account & Lists</strong>
        </Link>


        {/* ORDERS */}

        <Link to="/orders" className="nav-item">
          <small>Returns</small>
          <strong>& Orders</strong>
        </Link>


        {/* CART */}

        <Link to="/cart" className="cart">

          🛒

          <span>
            {cartCount}
          </span>

          <strong>
            Cart
          </strong>

        </Link>

      </header>


      {/* ===================================
          SECOND NAVIGATION BAR
      =================================== */}

      <nav className="subnav">

        <Link to="/">
          🏠 Home
        </Link>

        <Link to="/deals">
          🔥 Today's Deals
        </Link>

        <Link to="/customer-service">
          🎧 Customer Service
        </Link>

        <Link to="/gift-cards">
          💳 Gift Cards
        </Link>

        <Link to="/sell">
          🏪 Sell
        </Link>

        <Link to="/best-sellers">
          ⭐ Best Sellers
        </Link>

        <Link to="/trending">
          📈 Trending
        </Link>

      </nav>
    </>
  );
}

export default Navbar;