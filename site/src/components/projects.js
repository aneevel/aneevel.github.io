import React from "react"

const Projects = ({ projects }) => {
    return (
        <section id="projects"
            className="pt-10 mx-auto w-full flex flex-col">
            <h3
                className="text-4xl font-bold mx-auto mb-5"
                >
                Highlighted Work
            </h3>
            <ul>

            </ul>
        </section>
    )
}

const Project = ({ project }) => {
    return (
        <div>
            <h4>
                {project.name}
            </h4>
        </div>
    )
}

export default Projects;