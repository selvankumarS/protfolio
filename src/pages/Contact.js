
import React, { useState } from "react";
import "./Contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [success, setSuccess] = useState("");

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSuccess("Thank you! Your message has been submitted successfully.");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }

    return (
        <section className="contact-container">

            {/* Heading */}
            <div className="contact-heading">
                <p>GET IN TOUCH</p>
                <h1>Contact <span>Me</span></h1>
                <div className="contact-line"></div>

                <h3>Let's Work Together</h3>

                <p className="contact-intro">
                    Have a project idea or a job opportunity?
                    I would love to hear from you. Feel free to
                    contact me for collaboration, opportunities
                    or any questions.
                </p>
            </div>

            <div className="contact-content">

                {/* Left Information */}
                <div className="contact-info">

                    <h2>Let's Talk</h2>

                    <p>
                        I am always excited to connect with people,
                        discuss new ideas and explore opportunities
                        in frontend development.
                    </p>

                    <div className="contact-info-card">
                        <div className="contact-icon">📧</div>
                        <div>
                            <h4>Email Address</h4>
                            <p>YOUR EMAIL ADDRESS</p>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div className="contact-icon">📍</div>
                        <div>
                            <h4>Location</h4>
                            <p>Chennai, Tamil Nadu</p>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div className="contact-icon">💻</div>
                        <div>
                            <h4>Job Role</h4>
                            <p>Frontend Developer - Fresher</p>
                        </div>
                    </div>

                    <div className="contact-social">
                        <h3>Connect With Me</h3>

                        <div className="social-links">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>

                {/* Right Contact Form */}
                <div className="contact-form-box">

                    <h2>Send Me a Message</h2>

                    <p className="form-description">
                        Fill out the form below and let's start
                        a conversation.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Your Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Enter subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="send-btn">
                            Send Message <span>➜</span>
                        </button>

                        {success && (
                            <p className="success-message">
                                ✓ {success}
                            </p>
                        )}

                    </form>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="contact-footer">
                <h2>Thank You for Visiting My <span>Portfolio!</span></h2>

                <p>
                    I look forward to connecting with you and
                    exploring exciting opportunities in web development.
                </p>
            </div>

        </section>
    );
}

export default Contact;
