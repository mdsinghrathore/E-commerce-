import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home({ addToCart, search }) {

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const trendingProducts =
    products
      .filter((product) => product.trending)
      .slice(0, 6);

  return (
    <>

      <Banner />


      {/* OFFERS */}

      <section className="seller-offers">

        <h2>
          🔥 Today's Top Offers
        </h2>

        <div className="offer-grid">

          <div className="offer-card">
            <span>UP TO</span>
            <strong>60% OFF</strong>
            <h3>Electronics</h3>
            <p>
              Headphones, speakers, watches & more
            </p>
            <button>
              Shop Now →
            </button>
          </div>


          <div className="offer-card">
            <span>FLAT</span>
            <strong>50% OFF</strong>
            <h3>Fashion Deals</h3>
            <p>
              Shoes, bags and accessories
            </p>
            <button>
              Explore →
            </button>
          </div>


          <div className="offer-card">
            <span>STARTING</span>
            <strong>₹499</strong>
            <h3>Seller Specials</h3>
            <p>
              Limited-time seller discounts
            </p>
            <button>
              View Deals →
            </button>
          </div>


          <div className="offer-card">
            <span>SAVE UP TO</span>
            <strong>40%</strong>
            <h3>Computer Accessories</h3>
            <p>
              Keyboards, stands and more
            </p>
            <button>
              Shop Now →
            </button>
          </div>

        </div>

      </section>


      {/* TRENDING */}

      <section className="trending-section">

        <div className="section-heading">

          <h2>
            📈 Trending Products
          </h2>

        </div>


        <div className="trending-grid">

          {trendingProducts.map(
            (product) => (

              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />

            )
          )}

        </div>

      </section>


      {/* PRODUCTS */}

      <section className="products">

        <h2>
          Featured Products
        </h2>

        <div className="product-grid">

          {filteredProducts.map(
            (product) => (

              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />

            )
          )}

        </div>

      </section>

    </>
  );
}

export default Home;