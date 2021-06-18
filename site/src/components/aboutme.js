import React from "react"

import "../styles/aboutme.css"

const AboutMe = () => {
    return (
        <section id="about-me"
            className="container flex mx-auto pt-32 pl-8 pr-8 w-full justify-start"
        >
            <div
                id="about-me-text"
                className="w-2/3"
            >
                <h2 
                    className="font-bold pb-6 text-4xl"
                >
                    Hello! My name is <em className="italic">Alec Neevel</em>.
                </h2>
                <p
                    className="pt-6 pb-3 text-xl">I'm a web software engineer living in Madison, Wisconsin.
                I like to work with the entire stack, handling anything from React (which this site is built on!)
                to GraphQL.
                </p>
                <p
                    className="pt-3 pb-3 text-xl"
                >I design, create, and maintain websites, web applications, and more. I enjoy using modern technology to build applications 
                    that my clients, family, and friends feel joy using.
                </p>
                <p
                    className="pt-3 pb-3 text-xl"
                >In addition to my web software skills, I have a wide variety of hobbies
                    and interests. I am always working on developing video games, tackling
                    every aspect I possibly can, from programming and art to music and design.
                </p>
                <p 
                    className="pt-3 pb-3 text-xl"
                >
                    I play guitar, with a particular emphasis on rhythm metal guitar stylings.
                </p>
                <p 
                    className="pt-3 pb-3 text-xl"
                > 
                    I am obsessed with baseball and try to support the Milwaukee Brewers as much
                    as possible.
                </p>
                <p 
                    className="pt-3 pb-3 text-xl"
                >
                    Want to chat with me about any of the above? Please feel free to visit my 
                    Contact section and find a way to get in touch! :)
                </p>
            </div>
        </section>
    )
}

export default AboutMe;