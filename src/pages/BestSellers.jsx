import ProductCard from "../components/ProductCard";
import products from "../data/products";

function BestSellers({ addToCart }) {

  const bestSellers = products.slice(0, 12);

  return (

    <div className="page">

      <div className="page-header">

        <h1>
          ⭐ Best Sellers
        </h1>

        <p>
          Our most popular products
        </p>

      </div>


      <div className="product-grid">

        {bestSellers.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />

        ))}

      </div>

    </div>
  );
}

export default BestSellers;