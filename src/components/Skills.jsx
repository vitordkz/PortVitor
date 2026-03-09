const skills = ["HTML", "CSS", "JavaScript", "React", "Git e GitHub"]

function Skills() {
    return (
        <section id="skills" className="section">
            <h2>Skills</h2>

            <div className="skills-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Skills