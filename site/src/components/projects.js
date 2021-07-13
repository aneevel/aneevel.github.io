import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Projects = ({ projects }) => {

    return (
        <section id="my-projects"
            className="pt-10 mx-auto w-full container flex flex-col pl-10 pr-10 justify-center">
            <h3
                className="text-4xl font-bold mx-auto self-center"
                >
                Highlighted Work
            </h3>
            <ul
                className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-2 mx-6 my-8 width-100">
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
                className="container my-4 mx-auto flex flex-col"
            >
                <h4
                    className="my-4 h-10 text-center font-semibold text-4xl"
                >
                    {project.name}
                </h4>
                <h4 
                    className="my-12 text-center font-semibold text-xl"
                >
                    {project.relevance}
                </h4>
                <div 
                    
                >
                    <Image
                        className="m-0 mb-4 p-0 w-full"  
                        fluid={project.coverImg.childImageSharp.fluid}
                    />
                </div>
                <LabelList labels={project.labels}/>
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
            <p
                className=""
            >
                {label}
            </p>
    );
    return (
        <div
            id="label-list"
            className="flex flex-wrap flex-auto h-20 text-xl justify-between items-center my-4"
        >
            {listItems}
        </div>
    );
}

export default Projects;