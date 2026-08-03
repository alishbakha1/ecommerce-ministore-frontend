import React, { useEffect, useState } from "react";
import "./shop.css";

function Shop(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  // 👇 YAHAN ADD KARO
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((product) => product.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        ...item,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
  };

  return (

    <>
      {/* Banner */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/productbanner.jpg"
              className="d-block w-100"
              alt="Product Banner"
            />
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container py-5">
        <div className="product-heading text-center mb-5">
          <h2>
            <b>
              <u>OUR FEATURED PRODUCTS</u>
            </b>
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {product.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
              <div className="shop-card h-100">
                <div className="shop-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="shop-image"
                  />
                </div>

                <div className="card-body">
                  <h5 className="shop-title">{item.title}</h5>

                  <p className="shop-category">{item.category}</p>

                  <p className="shop-price">
                    <b>Rs. {item.price}</b>
                  </p>

                  <button

                    className="shop-btn"
                    onClick={() => props.setCount(props.count + 1)}
                  >
                    Add to Cart
                  </button>      </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;