import React from "react"

import "../styles/skills.css"

import angular from "../images/angular.svg";

const Skills = () => {
    return (
        <section id="skills-section"
            className="pt-10 mr-0 w-full flex flex-col"
        >
            <h3 
                    className="text-4xl font-bold mx-auto mb-5"
                >
                    Web Development Skills
                </h3>
            <div id="skills-container"
                className="w-full bg-gray-800"
            >
                <div id="skills-grid"
                    className="grid grid-cols-8 gap-2 items-center"
                >
                    <div
                        className="w-20 h-20 my-4"
                        >
                            <img 
                                alt="Angular"
                                src={angular}
                            />

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div 
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div 
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                    <div
                        className="w-20 h-20"
                        >

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;