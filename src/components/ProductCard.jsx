function ProductCard({ product, addToCart }) {

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        onError={(event) => {
          event.currentTarget.src =
            "https://placehold.co/600x400?text=Product";
        }}
      />

      <div className="product-info">

        <p className="category-name">
          {product.category}
        </p>

        <h3>
          {product.name}
        </h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <button
          className="add-button"
          onClick={() =>
            addToCart(product)
          }
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;