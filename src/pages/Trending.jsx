import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Trending({ addToCart }) {

  const trendingProducts =
    products.filter(
      (product) => product.trending
    );

  return (

    <div className="page">

      <div className="page-header">

        <h1>
          📈 Trending Products
        </h1>

        <p>
          Products everyone is buying right now
        </p>

      </div>


      <div className="product-grid">

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

    </div>
  );
}

export default Trending;