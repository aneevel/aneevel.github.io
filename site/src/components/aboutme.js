import React from "react"
import Image from "./image"
import Button from "./button"

import "../styles/aboutme.css"

const AboutMe = () => {
    return (
        <section id="aboutme-container"
            className="container flex flex-row m-10 pt-20 pb-20 max-w-full justify-center lg:justify-start">
            <div
                className="container flex flex-col">
                <h2 
                    className="font-bold pb-6 text-4xl"
                >Hi! I'm Alec</h2>
                <p
                    className="pt-6 pb-6">I'm a web software engineer living in Madison, Wisconsin.
                I like to work with the entire stack, handling anything from React (which this site is built on!)
                to GraphQL.
                </p>
                <p>I design, create, and maintain websites, web applications, and more. I enjoy using modern technology to build applications 
                    that my clients, family, and friends feel joy using.
                </p>
            </div>
            <div
                className="container">
                
            </div>
        </section>
    )
}

export default AboutMe;