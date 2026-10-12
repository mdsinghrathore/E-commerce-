function Cart({
  cart,
  removeFromCart
}) {

  const total = cart.reduce(
    (sum, product) =>
      sum + product.price,
    0
  );

  return (

    <div className="page">

      <h1>
        🛒 Shopping Cart
      </h1>


      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>
            Your cart is empty
          </h2>

          <p>
            Add some products to get started.
          </p>

        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-items">

            {cart.map(
              (product, index) => (

                <div
                  className="cart-item"
                  key={`${product.id}-${index}`}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://placehold.co/300x300?text=Product";
                    }}
                  />


                  <div>

                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </p>

                    <button
                      className="remove-button"
                      onClick={() =>
                        removeFromCart(index)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              )
            )}

          </div>


          <div className="cart-summary">

            <h2>
              Order Summary
            </h2>

            <p>
              Items: {cart.length}
            </p>

            <h2>
              Total: ₹
              {total.toLocaleString("en-IN")}
            </h2>

            <button className="checkout-button">
              Proceed to Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;