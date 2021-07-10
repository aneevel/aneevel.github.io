import React from "react"

import "../styles/skills.css"

import angular from "../images/angular.svg";
import bootstrap from "../images/bootstrap.png";
import css from "../images/css.svg";
import gatsby from "../images/gatsby.png";
import git from "../images/git.svg";
import github from "../images/github.svg";
import html from "../images/html.svg";
import java from "../images/java.png";
import js from "../images/js.svg";
import linux from "../images/linux.svg";
import macos from "../images/macos.png";
import mysql from "../images/mysql.png";
import nodejs from "../images/nodejs.svg";
import react from "../images/react.svg";
import tailwind from "../images/tailwind.svg";
import windows from "../images/windows.png"

const Skills = () => {
    return (
        <section id="my-skills"
            className="pt-10 mr-0 w-full flex flex-col"
        >
            <h3 
                    className="text-4xl font-bold mx-auto mb-10"
                >
                    Web Development Skills
                </h3>
            <div id="skills-container"
                className="w-full bg-gray-800"
            >
                <div id="skills-grid"
                    className="flex content-center grid grid-cols-8 gap-4 py-8 mx-auto justify-items-center"
                >
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Angular"
                                src={angular}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Bootstrap"
                                src={bootstrap}
                            />

                    </div>
                    <div 
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="CSS"
                                src={css}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Gatsby"
                                src={gatsby}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Git"
                                src={git}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Github"
                                src={github}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="HTML"
                                src={html}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Java"
                                src={java}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="JavaScript"
                                src={js}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Linux"
                                src={linux}
                            />
                    </div>
                    <div 
                        className="w-16 h-16 m-4"
                        >
                            <img
                                alt="MacOS"
                                src={macos}
                            />
                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="MySQL"
                                src={mysql}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img
                                alt="NodeJS"
                                src={nodejs}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="React"
                                src={react}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Tailwind"
                                src={tailwind}
                            />

                    </div>
                    <div
                        className="w-16 h-16 m-4"
                        >
                            <img 
                                alt="Windows"
                                src={windows}
                            />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;