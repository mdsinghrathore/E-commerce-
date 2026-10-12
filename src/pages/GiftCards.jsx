function GiftCards() {

  return (

    <div className="simple-page">

      <div className="gift-card-container">

        <h1>
          🎁 Gift Cards
        </h1>

        <p>
          Give someone the gift of choice.
        </p>


        <div className="gift-options">

          <button>
            ₹500
          </button>

          <button>
            ₹1,000
          </button>

          <button>
            ₹2,000
          </button>

          <button>
            ₹5,000
          </button>

        </div>


        <button className="primary-button">
          Buy Gift Card
        </button>

      </div>

    </div>

  );
}

export default GiftCards;