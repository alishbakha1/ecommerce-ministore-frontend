import React from 'react'
import ProductCard from '../ProductCard'
import './Home.css'

function Home(props) {
    return (
        <>
            {/* banner */}
            <div id="carouselExampleIndicators" className="carousel slide hero-carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80" className="d-block w-100" alt="New Arrivals" />
                        <div className="hero-overlay"></div>
                        <div className="carousel-caption hero-caption">
                            <h6 className="hero-subtitle">New Season</h6>
                            <h1 className="hero-title">Timeless Styles, Earthy Tones</h1>
                            <p className="hero-text">Handpicked fashion pieces made to last.</p>
                            <a href="#products" className="btn hero-btn">Shop Now</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80" className="d-block w-100" alt="Featured Look" />
                        <div className="hero-overlay"></div>
                        <div className="carousel-caption hero-caption">
                            <h6 className="hero-subtitle">Limited Time</h6>
                            <h1 className="hero-title">Warm Palettes, Modern Cuts</h1>
                            <p className="hero-text">Up to 40% off on select collections.</p>
                            <a href="#products" className="btn hero-btn">Shop Now</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80" className="d-block w-100" alt="Autumn Collection" />
                        <div className="hero-overlay"></div>
                        <div className="carousel-caption hero-caption">
                            <h6 className="hero-subtitle">Trending Now</h6>
                            <h1 className="hero-title">Autumn Edit, Curated for You</h1>
                            <p className="hero-text">Quality fabrics, delivered to your door.</p>
                            <a href="#products" className="btn hero-btn">Shop Now</a>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* features strip */}
            <div className="features-strip">
                <div className="feature-item">
                    <i className="bi bi-truck"></i>
                    <div>
                        <h6>Free Delivery</h6>
                        <p>On orders over $50</p>
                    </div>
                </div>
                <div className="feature-item">
                    <i className="bi bi-shield-check"></i>
                    <div>
                        <h6>Secure Payment</h6>
                        <p>100% protected checkout</p>
                    </div>
                </div>
                <div className="feature-item">
                    <i className="bi bi-arrow-repeat"></i>
                    <div>
                        <h6>Easy Returns</h6>
                        <p>7 day return policy</p>
                    </div>
                </div>
                <div className="feature-item">
                    <i className="bi bi-headset"></i>
                    <div>
                        <h6>24/7 Support</h6>
                        <p>We're here to help</p>
                    </div>
                </div>
            </div>

            {/* products section */}
            <section id="products" className="products-section">
                <div className="section-heading">
                    <h6 className="section-subtitle">Our Collection</h6>
                    <h2 className="section-title">Featured Products</h2>
                    <p className="section-desc">Explore our best-selling picks, chosen for quality and style.</p>
                </div>
<ProductCard
  count={props.count}
  setCount={props.setCount}
/>
            </section>
        </>
    )
}

export default Home