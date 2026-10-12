import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Deals({ addToCart }) {

  const deals = products.filter(
    (product) =>
      product.price <= 3000
  );

  return (

    <div className="page">

      <div className="page-header">

        <h1>
          🔥 Today's Deals
        </h1>

        <p>
          Limited-time offers available today
        </p>

      </div>


      <div className="product-grid">

        {deals.map((product) => (

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

export default Deals;