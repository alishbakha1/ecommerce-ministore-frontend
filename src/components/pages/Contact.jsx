import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';

function Contact() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const feedbackUser = async (e) => {

        e.preventDefault();

        const feedback = {
            fullname,
            email,
            message
        }

        try {
            const response = await axios.post("http://localhost:4000/contact", feedback)
            alert("Thanks for your Feedback!");
            setFullname("");
            setEmail("");
            setMessage("");


        } catch (error) {

            alert("Sending Failed!")
            console.log(error);

        }

    }


    return (
        <>

            <div className="contact-banner">
            </div>

            <section className="contact-section">
                {/* LEFT SIDE */}
                <div className="contact-left">
                    <div className="section-title">
                        <span>GET IN TOUCH</span>
                        <h2>Let's Talk About Your Shopping Experience</h2>
                    </div>

                    <p className="contact-text">
                        Have questions about products, delivery, payments, or support?
                        Our team is always ready to help you with your orders and feedback.
                    </p>

                    <div className="info-card">
                        <div className="icon-box">
                            <a href="#"><i className="fa-solid fa-envelope"></i></a>
                        </div>

                        <div>
                            <h4>Email Address</h4>
                            <a href="mailto:contact@ministore.com">
                                contact@ministore.com
                            </a>
                        </div>
                    </div>

                    <div className="info-card text-white">
                        <div className="icon-box">
                            <a href="#"><i className="fa-solid fa-phone"></i></a>
                        </div>

                        <div>
                            <h4>Phone Number</h4>
                            <a href="tel:+923001234567">+92 300 1234567</a>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="icon-box">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </div>

                        <div>
                            <h4>Location</h4>
                            <p>Karachi, Pakistan</p>
                        </div>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="social-icons ">
                        <a href="#" className='text-white'><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className='text-white'><i className="fab fa-whatsapp"></i></a>
                        <a href="#" className='text-white'><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="contact-right">
                    <form className="contact-form" onSubmit={feedbackUser}>
                        <h2>Send Feedback</h2>

                        <div className="form-group">
                            <input type="text" placeholder="Your Name" value={fullname} onChange={(e)=>setFullname(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Subject" />
                        </div>

                        <div className="form-group">
                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                                required value={message} onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>

            {/* ================= GOOGLE MAP ================= */}
            <section className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4535274480863!2d67.0878641757288!3d24.882507244374455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1d4d207977%3A0xa9f471da95ca95e3!2sKhaadi!5e0!3m2!1sen!2s!4v1779277311980!5m2!1sen!2s" width="600" height="450"  loading="lazy" ></iframe>
            </section>




        </>
    )
}

export default Contact