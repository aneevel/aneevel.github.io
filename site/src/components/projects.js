import React from "react"

const Projects = ({ projects }) => {
    return (
        <section id="projects"
            className="pt-10 mx-auto container flex flex-col">
            <h3
                className="text-4xl font-bold mx-auto mb-5"
                >
                Highlighted Work
            </h3>
            <ul
                className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                {projects.map(project => (
                    <Project key={project.node.name} project={project.node} />
                ))}
            </ul>
        </section>
    )
}

const Project = ({ project }) => {
    return (
        <li>
            <div 
                className="bg-purple-200"
            >
                <img src={project.coverImg}/>
                <h4>
                    {project.name}
                </h4>
                <LabelList labels={project.labels} />
                <p>{project.description}</p>
                <a href={project.githubLink}>GitHub Link</a>
                <a href={project.projectLink}>Live Demo</a>
                <p>{project.addendum}</p>

            </div>
        </li>
    )
}

function LabelList(props) {
    const labels = props.labels;
    const listItems = labels.map((label) =>
        <li key={label}>
            {label}
        </li>
    );
    return (
        <ul id="label-list">{listItems}</ul>
    );
}

export default Projects;