import React from "react"

import "../styles/aboutme.css"

const AboutMe = () => {
  return (
    <section id="about-me"
      className="container flex mx-auto pt-32 md:pt-24"
    >
      <div
        id="about-me-text"
        className="mx-auto lg:pr-6 lg:w-2/3 md:pr-0 md:w-3/4 text-center"
      >
        <h2
          className="font-bold pb-6 text-4xl"
        >
          Hi! My name is <em className="italic text-purple-800">Alec Neevel</em>
        </h2>
        <p
          className="pt-6 pb-3 text-xl">I'm a web software engineer living in Madison, Wisconsin.
          I like to work with the entire stack, handling anything from React (which this site is built on!)
          to GraphQL.
        </p>
        <p
          className="pt-3 pb-3 text-xl"
        >My primary interest is in building modern, accessible full-stack applications. I try to adhere to
          well-evidenced principles of Behavior Driven Development in order to deliver a thoroughly tested
          and secure application that meets the needs of its users.
        </p>
        <p
          className="pt-3 pb-3 text-xl">
          If you're interested in anything I'm working on, or would like to chat with me about any development
          opportunities, please see my <a href="#contact">Contact</a> section.
        </p>
      </div>
    </section>
  )
}

export default AboutMe;
