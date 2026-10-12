import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    title: "Big Electronics Sale",
    subtitle: "Up to 60% OFF",
    description:
      "Upgrade your gadgets at amazing prices.",
    button: "Shop Electronics",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: 2,
    title: "Fashion Festival",
    subtitle: "Flat 50% OFF",
    description:
      "Trending styles. Amazing prices.",
    button: "Explore Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: 3,
    title: "Seller Special Offers",
    subtitle: "Deals Starting ₹499",
    description:
      "Exclusive offers from our top sellers.",
    button: "View Deals",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=85",
  },
];

function Banner() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((previous) =>
        previous === banners.length - 1
          ? 0
          : previous + 1
      );

    }, 5000);

    return () => clearInterval(timer);

  }, []);


  return (

    <section className="offer-banner">

      <img
        key={banners[current].id}
        className="banner-image"
        src={banners[current].image}
        alt={banners[current].title}
      />


      <div className="banner-overlay"></div>


      <div
        key={`content-${banners[current].id}`}
        className="banner-content"
      >

        <p className="seller-ad">
          🔥 SELLER SPECIAL
        </p>

        <h1>
          {banners[current].title}
        </h1>

        <h2>
          {banners[current].subtitle}
        </h2>

        <p>
          {banners[current].description}
        </p>

        <button className="banner-button">
          {banners[current].button}
        </button>

      </div>


      {/* ARROWS */}

      <button
        className="banner-arrow left"
        onClick={() =>
          setCurrent(
            current === 0
              ? banners.length - 1
              : current - 1
          )
        }
      >
        ❮
      </button>


      <button
        className="banner-arrow right"
        onClick={() =>
          setCurrent(
            current === banners.length - 1
              ? 0
              : current + 1
          )
        }
      >
        ❯
      </button>


      {/* DOTS */}

      <div className="banner-dots">

        {banners.map(
          (banner, index) => (

            <button
              key={banner.id}
              className={
                index === current
                  ? "active-dot"
                  : ""
              }
              onClick={() =>
                setCurrent(index)
              }
            />

          )
        )}

      </div>

    </section>

  );
}

export default Banner;