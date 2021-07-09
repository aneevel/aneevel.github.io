import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Projects = ({ projects }) => {

    return (
        <section id="projects"
            className="pt-10 mx-auto container flex flex-col pl-5 pr-5">
            <h3
                className="text-4xl font-bold mx-auto"
                >
                Highlighted Work
            </h3>
            <ul
                className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 mx-6 width-100">
                {projects.map(project => (
                    <Project key={project.node.name} project={project.node} />
                ))}
            </ul>
        </section>
    )
}

const Project = ({ project }) => {

    

    return (
        <li key={project.name}>
            <div 
                className="container my-4 mx-auto"
            >
                <div 
                    
                >
                    <Image
                        className="m-0 mb-4 p-0 w-full"  
                        fluid={project.coverImg.childImageSharp.fluid}
                    />
                </div>
                <h4
                    className="my-4"
                >
                    {project.name}
                </h4>
                <LabelList labels={project.labels}
                    className="my-4"
                />
                <p
                    className="my-4"
                >
                    {project.description}
                </p>
                <button className="bg-purple-600 hover:bg-purple-400 font-bold rounded py-2 px-3 my-2 text-white">
                    <a href={project.githubLink}>GitHub Link</a>
                </button>
                <button className="bg-purple-600 hover:bg-purple-400 font-bold rounded py-2 px-3 mx-2 my-2 text-white">
                    <a href={project.projectLink}>Live Demo</a>
                </button>
                <p 
                    className="italic my-4 pb-4"
                >
                    {project.addendum}
                </p>

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