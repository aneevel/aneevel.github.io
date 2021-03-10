import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutme"
import Contact from "../components/contact"
import Games from "../components/games"
import Projects from "../components/projects"
import Skills from "../components/skills"
import MTG from "../components/tca-mtg"
import Viridian from "../components/viridian"
import Webdev from "../components/webdev"

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Alec Neevel - Professional Web Software Engineer" />
    <AboutMe/>
    <Skills/>
    <Projects>
        <Webdev>
            <MTG/>
        </Webdev>
        <Games>
            <Viridian/>
        </Games>
    </Projects>
    <Contact/>
  </Layout>
)

export default IndexPage
