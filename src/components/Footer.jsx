import React from 'react'
import './Footer.css'

function Footer(props) {
    return (
        <>

            <footer className="footer">

                {/* Social Media */}
                <section className="footer-social">
                    <div className="social-text d-none d-lg-block">
                        <span>Follow us for latest fashion updates:</span>
                    </div>

                    <div>
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                    </div>
                </section>

                {/* Links */}
                <section className="footer-links">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">

                            {/* Brand */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="footer-heading highlight">
                                    <i className="fas fa-tshirt me-2"></i>{props.title}
                                </h6>
                                <p>
                                    Premium collection of Office Shirts, Casual T-Shirts, and Denim Jeans.
                                    Elevate your everyday fashion with comfort and style.
                                </p>
                            </div>

                            {/* Categories */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="footer-heading secondary">Categories</h6>
                                <p><a href="#" className="footer-link">Office Shirts</a></p>
                                <p><a href="#" className="footer-link">T-Shirts</a></p>
                                <p><a href="#" className="footer-link">Denim Jeans</a></p>
                                <p><a href="#" className="footer-link">New Arrivals</a></p>
                            </div>

                            {/* Customer Care */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="footer-heading secondary">Customer Care</h6>
                                <p><a href="#" className="footer-link">My Account</a></p>
                                <p><a href="#" className="footer-link">Orders</a></p>
                                <p><a href="#" className="footer-link">Shipping</a></p>
                                <p><a href="#" className="footer-link">Help</a></p>
                            </div>

                            {/* Contact */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="footer-heading highlight">Contact</h6>
                                <p><i className="fas fa-home me-2"></i>Karachi, Pakistan</p>
                                <p><i className="fas fa-envelope me-2"></i>support@stylewear.com</p>
                                <p><i className="fas fa-phone me-2"></i>+92 300 1234567</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Copyright */}
                <div className="footer-bottom">
                    © 2026 StyleWear | All Rights Reserved
                </div>

            </footer>

        </>
    )
}

export default Footer