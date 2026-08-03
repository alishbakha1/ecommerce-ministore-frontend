import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [payment, setPayment] = useState("cod");

 const [formData, setFormData] = useState({
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  province: "",
  city: "",
  postalCode: "",
  phone: "",
});

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const subtotal = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

const shipping = cart.length > 0 ? 250 : 0;
const tax = cart.length > 0 ? 100 : 0;

const total = subtotal + shipping + tax;

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const placeOrder = () => {
    if (
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.province ||
      !formData.city ||
      !formData.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert("🎉 Order Placed Successfully!");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        {/* LEFT SIDE */}

        <div className="checkout-left">

          <h2>Checkout</h2>

          <div className="checkout-card">

            <h4>Contact Information</h4>

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <h4>Delivery Address</h4>

            <div className="row-two">

              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />

            </div>

            <input
              type="text"
              placeholder="Street Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Apartment (Optional)"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
            />

            <div className="row-two">

              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Select Province</option>
                <option>Sindh</option>
                <option>Punjab</option>
                <option>KPK</option>
                <option>Balochistan</option>
              </select>

              <input
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />

            </div>

            <div className="row-two">

              <input
                type="text"
                placeholder="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="checkout-card">

            <h4>Payment Method</h4>

            <label className="radio-option">
              <input
                type="radio"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              Cash on Delivery
            </label>

            <label className="radio-option">
              <input
                type="radio"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
              Credit / Debit Card
            </label>

            {payment === "card" && (
              <div className="card-details">

                <input type="text" placeholder="Card Number" />

                <div className="row-two">

                  <input type="text" placeholder="MM / YY" />

                  <input type="password" placeholder="CVV" />

                </div>

                <input type="text" placeholder="Card Holder Name" />

              </div>
            )}

          </div>

        </div>

        {/* RIGHT SIDE */}

       <div className="checkout-right">

  <div className="summary-card">

    <h3>Order Summary</h3>

    <div className="summary-row">
      <span>Subtotal</span>
      <span>Rs. {subtotal.toFixed(2)}</span>
    </div>

    <div className="summary-row">
      <span>Shipping</span>
      <span>Rs. {shipping}</span>
    </div>

    <div className="summary-row">
      <span>Tax</span>
      <span>Rs. {tax}</span>
    </div>

    <hr />

    <div className="summary-total">
      <span>Total</span>
      <span>Rs. {total.toFixed(2)}</span>
    </div>

    {cart.length === 0 && (
      <p style={{ color: "red", marginTop: "15px" }}>
        Your cart is empty.
      </p>
    )}

    <button
      className="place-order-btn"
      onClick={placeOrder}
    >
      Place Order
    </button>

  </div>

</div>
          </div>

        </div>

      
  );
}

export default Checkout;