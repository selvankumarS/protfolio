
import React from "react";
import "./About.css";
import img2 from '../images/profile.jpg.jpeg'

function About() {
    return (
        <section className="about-container">

            <div className="about-heading">
                <p>GET TO KNOW ME</p>
                <h1>About <span>Me</span></h1>
                <div className="about-line"></div>
            </div>

            <div className="about-content">

                {/* Profile Image */}
                <div className="about-image">
                    <img
                        src={img2}
                        alt="Selvakumar Profile"
                    />
                    <div className="image-border"></div>
                </div>

                {/* About Details */}
                <div className="about-details">

                    <h2>Hello, I'm <span>Selvakumar</span></h2>

                    <h3>Frontend Developer</h3>

                    <p>
                        I am an enthusiastic and passionate Frontend
                        Developer with a strong interest in creating
                        modern, responsive and user-friendly websites.
                    </p>

                    <p>
                        I have completed my B.Com degree in 2023.
                        After that, I developed an interest in the IT
                        field and decided to build my career in web
                        development. I completed a Frontend Development
                        course at Besant Technologies and gained
                        practical knowledge of web technologies.
                    </p>

                    <p>
                        I enjoy learning new technologies, solving
                        problems and converting creative ideas into
                        attractive web applications. I am looking for
                        an opportunity to improve my skills and grow
                        as a professional Frontend Developer.
                    </p>

                    <div className="about-info">
                        <div>
                            <strong>Name:</strong>
                            <span>Selvakumar</span>
                        </div>

                        <div>
                            <strong>Degree:</strong>
                            <span>B.Com</span>
                        </div>

                        <div>
                            <strong>Role:</strong>
                            <span>Frontend Developer</span>
                        </div>

                        <div>
                            <strong>Location:</strong>
                            <span>Chennai, Tamil Nadu</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Education and Strengths */}
            <div className="about-cards">

                <div className="about-card">
                    <div className="card-icon">🎓</div>
                    <h3>Education</h3>
                    <h4>Bachelor of Commerce</h4>
                    <p>
                        Completed B.Com in 2023 at SSB Arts and
                        Science College, Kommadikottai.
                    </p>
                </div>

                <div className="about-card">
                    <div className="card-icon">💻</div>
                    <h3>Technical Training</h3>
                    <h4>Frontend Development</h4>
                    <p>
                        Completed a 6-month Frontend Development
                        course at Besant Technologies.
                    </p>
                </div>

                <div className="about-card">
                    <div className="card-icon">🚀</div>
                    <h3>My Strengths</h3>
                    <h4>Quick Learner</h4>
                    <p>
                        Self-motivated, hardworking, adaptable
                        and passionate about learning new skills.
                    </p>
                </div>

            </div>

            {/* Career Goal */}
            <div className="career-goal">
                <h2>My <span>Career Goal</span></h2>
                <p>
                    My goal is to become a skilled Frontend Developer
                    by continuously improving my technical knowledge,
                    building real-world projects and creating
                    meaningful digital experiences.
                </p>
            </div>

        </section>
    );
}

export default About;
