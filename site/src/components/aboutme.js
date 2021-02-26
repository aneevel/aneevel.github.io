import React from "react"
import Image from "./image"

const AboutMe = () => {
    return (
        <div id="aboutme-container">
            <Image/>
            <h2>A little about me...</h2>
            <p>My name is Alec Neevel. I am web software engineer living in Madison, Wisconsin.
               I like to work with the full-stack, handling anything from React (which this site is built on!)
               to SQL queries.
            </p>
            <Button/>
        </div>
    )
}

export default AboutMe;