
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import img1 from '../images/profile.jpg.jpeg'


function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">

            <div className="home-content">
                <p className="welcome">WELCOME TO MY PORTFOLIO</p>

                <h1>
                    Hi, I'm <span>Selvakumar</span>
                </h1>

                <h2>Frontend Developer</h2>

                <p className="home-description">
                    I am a passionate Frontend Developer who loves
                    creating modern, responsive and user-friendly
                    websites. I enjoy turning creative ideas into
                    beautiful web experiences using HTML, CSS,
                    JavaScript and React.js.
                </p>

                <p className="home-description">
                    I am a quick learner and always interested in
                    learning new technologies. My goal is to build
                    attractive websites and grow as a professional
                    Frontend Developer.
                </p>

                <div className="home-buttons">
                    <button onClick={() => navigate("/project")}>
                        View My Projects
                    </button>

                    <button
                        className="contact-btn"
                        onClick={() => navigate("/contact")}
                    >
                        Contact Me
                    </button>
                </div>

                <div className="home-skills">
                    <span>HTML</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>React.js</span>
                </div>
            </div>

            <div className="home-image">
                <img
                    src={img1}
                    alt="Selvakumar - Frontend Developer"
                />
            </div>

        </div>
    );
}

export default Home;
