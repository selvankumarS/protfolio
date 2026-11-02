
import React from "react";
import "./Project.css";

function Project() {

    const projects = [
        {
            number: "01",
            title: "Sports Shop Website",
            category: "HTML & CSS",
            icon: "🏏",
            description:
                "A responsive sports shopping website designed to display sports products like cricket bats, footballs and volleyballs. Includes product sections, navigation and attractive layouts.",
            technologies: ["HTML5", "CSS3"],
            type: "Frontend Website"
        },
        {
            number: "02",
            title: "JavaScript Login Page",
            category: "JavaScript",
            icon: "🔐",
            description:
                "A simple and interactive login page with username and password validation. JavaScript is used to check user inputs and display validation messages.",
            technologies: ["HTML", "CSS", "JavaScript"],
            type: "Web Application"
        },
        {
            number: "03",
            title: "Dress Shop Website",
            category: "React.js",
            icon: "👕",
            description:
                "A modern dress shopping website developed using React.js. It includes product displays, attractive layouts, reusable components and responsive design.",
            technologies: ["React.js", "JavaScript", "CSS3"],
            type: "React Application"
        },
        {
            number: "04",
            title: "Employee Management",
            category: "React.js",
            icon: "👨‍💼",
            description:
                "An employee management application to add, view, edit and delete employee details. React useState and array methods are used to manage employee data.",
            technologies: ["React.js", "JavaScript", "CSS3"],
            type: "CRUD Application"
        },
        {
            number: "05",
            title: "Karuppatti Shop Website",
            category: "React.js",
            icon: "🌴",
            description:
                "An online website for traditional palm jaggery products. It showcases natural products, product details, pricing and information about traditional preparation.",
            technologies: ["React.js", "JavaScript", "CSS3"],
            type: "React Application"
        },
        {
            number: "06",
            title: "React Login Page",
            category: "React.js",
            icon: "🔑",
            description:
                "A login form built with React.js using controlled inputs and useState. Includes email and password fields with basic form validation.",
            technologies: ["React.js", "JavaScript", "CSS3"],
            type: "React Application"
        }
    ];

    return (
        <section className="project-container">

            {/* Heading */}
            <div className="project-heading">
                <p>MY RECENT WORK</p>
                <h1>My <span>Projects</span></h1>
                <div className="project-line"></div>

                <h3>Some of My Creative Work & Practice Projects</h3>

                <p className="project-intro">
                    I have developed different projects using HTML,
                    CSS, JavaScript and React.js. Each project helped
                    me improve my frontend development knowledge,
                    problem-solving ability and practical coding skills.
                </p>
            </div>

            {/* Project Count */}
            <div className="project-count">
                <div>
                    <h2>06</h2>
                    <p>Total Projects</p>
                </div>

                <div>
                    <h2>04</h2>
                    <p>Technologies</p>
                </div>

                <div>
                    <h2>03</h2>
                    <p>React Projects</p>
                </div>
            </div>

            {/* Project Cards */}
            <div className="project-section-title">
                <h2>Featured <span>Projects</span></h2>
                <p>Explore my development projects</p>
            </div>

            <div className="project-grid">

                {projects.map((project) => (
                    <div className="project-card" key={project.number}>

                        <div className="project-card-top">
                            <span className="project-icon">
                                {project.icon}
                            </span>

                            <span className="project-number">
                                {project.number}
                            </span>
                        </div>

                        <span className="project-category">
                            {project.category}
                        </span>

                        <h2>{project.title}</h2>

                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="project-type">
                            {project.type}
                        </div>

                        <div className="project-tech">
                            {project.technologies.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>

                    </div>
                ))}

            </div>

            {/* Bottom Section */}
            <div className="project-footer">
                <h2>Building Ideas Into <span>Reality!</span></h2>

                <p>
                    Every project is a new opportunity to learn,
                    experiment and improve. I am always interested
                    in creating useful, responsive and user-friendly
                    web applications.
                </p>

                <h3>Let's Build Something Great Together.</h3>
            </div>

        </section>
    );
}

export default Project;
