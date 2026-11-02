
import React from "react";
import "./Skills.css";

function Skills() {

    const skills = [
        { name: "HTML5", level: "Strong Foundation", percent: "85%", icon: "🌐" },
        { name: "CSS3", level: "Good Understanding", percent: "80%", icon: "🎨" },
        { name: "JavaScript", level: "Practicing", percent: "70%", icon: "⚡" },
        { name: "Bootstrap", level: "Practicing", percent: "75%", icon: "📱" },
        { name: "React.js", level: "Learning & Building", percent: "70%", icon: "⚛️" }
    ];

    const reactTopics = [
        "Functional Components",
        "JSX",
        "Props & State",
        "useState Hook",
        "useEffect Hook",
        "useNavigate",
        "React Router",
        "API Integration",
        "Axios",
        "CRUD Operations"
    ];

    const otherSkills = [
        "Responsive Web Design",
        "Website Development",
        "API Integration",
        "Form Validation",
        "DOM Manipulation",
        "Problem Solving"
    ];

    return (
        <section className="skills-container">

            {/* Heading */}
            <div className="skills-heading">
                <p>MY TECHNICAL ABILITIES</p>
                <h1>My <span>Skills</span></h1>
                <div className="skills-line"></div>
                <h3>Technologies I Use to Build Modern Websites</h3>
                <p className="skills-intro">
                    I enjoy learning and working with modern web
                    technologies to create responsive, attractive
                    and user-friendly web applications.
                </p>
            </div>

            {/* Main Skills */}
            <div className="skills-section-title">
                <h2>Technical <span>Skills</span></h2>
                <p>My frontend development technologies</p>
            </div>

            <div className="skills-grid">

                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>

                        <div className="skill-top">
                            <span className="skill-icon">
                                {skill.icon}
                            </span>
                            <span className="skill-percent">
                                {skill.percent}
                            </span>
                        </div>

                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>

                        <div className="progress-bg">
                            <div
                                className="progress-fill"
                                style={{ width: skill.percent }}
                            ></div>
                        </div>

                    </div>
                ))}

            </div>

            {/* React Skills */}
            <div className="react-section">

                <div className="skills-section-title">
                    <h2>React.js <span>Knowledge</span></h2>
                    <p>Concepts and features I have practiced</p>
                </div>

                <div className="react-topics">
                    {reactTopics.map((topic, index) => (
                        <div className="topic-item" key={index}>
                            <span>✓</span>
                            {topic}
                        </div>
                    ))}
                </div>

            </div>

            {/* Other Skills */}
            <div className="other-section">

                <div className="skills-section-title">
                    <h2>Other <span>Skills</span></h2>
                    <p>Additional development skills</p>
                </div>

                <div className="other-skills-grid">
                    {otherSkills.map((item, index) => (
                        <div className="other-skill" key={index}>
                            <span>✦</span>
                            {item}
                        </div>
                    ))}
                </div>

            </div>

            {/* Personal Strengths */}
            <div className="strength-section">

                <h2>Personal <span>Strengths</span></h2>

                <div className="strength-grid">
                    <div className="strength-card">
                        <span>🚀</span>
                        <h3>Quick Learner</h3>
                        <p>I can understand new concepts and learn new technologies.</p>
                    </div>

                    <div className="strength-card">
                        <span>💡</span>
                        <h3>Problem Solver</h3>
                        <p>I enjoy finding solutions and improving my coding skills.</p>
                    </div>

                    <div className="strength-card">
                        <span>🎯</span>
                        <h3>Self Motivated</h3>
                        <p>I am passionate about learning and growing in frontend development.</p>
                    </div>
                </div>

            </div>

            {/* Bottom Content */}
            <div className="skills-footer">
                <h2>Always Learning, Always <span>Growing!</span></h2>
                <p>
                    I believe that learning never stops. I am continuously
                    improving my frontend development skills and exploring
                    new technologies to build better web experiences.
                </p>
            </div>

        </section>
    );
}

export default Skills;
