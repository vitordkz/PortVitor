const projects = [
    {
        title: "Agropecuária Website",
        description: "Site institucional para uma agropecuária. O site apresenta produtos, informações sobre a empresa e informações de contato para clientes.",
        tech: "HTML • CSS • JavaScript • React",
        link: "https://recanto-dos-bichos.web.app"
    },
    /* {
        title: "Project Two",
        description: "Landing page with smooth layout and clean UI",
        tech: "React • CSS",
        link: "#"
    } */
]

function Projects() {
    return(
        <section id="projects" className="section">
            <h2>Projetos</h2>

            <div className="projects-grid">
            {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  className="card project-card"
                >
                    <h3>{project.title}</h3>

                    <div className="project-info">
                        <p>{project.description}</p>
                        <p className="tech">{project.tech}</p>
                    </div>
                </a>
            ))}
            </div>
        </section>
    )
}

export default Projects