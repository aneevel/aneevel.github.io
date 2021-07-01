import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutme"
import Contact from "../components/contact"
import { graphql } from 'gatsby';
import Projects from "../components/projects"
import Skills from "../components/skills"


const IndexPage = ({ data }) => {
  return (
    <Layout>
    <SEO title="Alec Neevel - Professional Web Software Engineer" />
    <AboutMe/>
    <Skills/>
    <Projects projects={data.projects.edges}>
    </Projects>
    <Contact/>
  </Layout>
  )
}

export const query = graphql`
  query ProjectQuery {
    projects {
      edges {
        node {
          coverImg
          name
          labels
          description
          githubLink
          projectLink
          addendum
        }
      }
    }
  }
  `

export default IndexPage
