import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutme"
import Contact from "../components/contact"
import { useStaticQuery, graphql } from 'gatsby';
import Projects from "../components/projects"
import Skills from "../components/skills"


const IndexPage = ({ data }) => {

  const query = useStaticQuery(graphql`
  query ProjectQuery {
    allProjectsJson {
      edges {
        node {
          labels
          addendum
          description
          githubLink
          name
          relevance
          projectLink
          coverImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid 
              }
            }
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
    <SEO title="Alec Neevel - Professional Web Software Engineer" />
    <AboutMe/>
    <Skills/>
    <Projects projects={query.allProjectsJson.edges}>
    </Projects>
    <Contact/>
  </Layout>
  )

  
}

export default IndexPage
