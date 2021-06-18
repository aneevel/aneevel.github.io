/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"

class Layout extends React.Component {

  render() {
    return (
      <div 
        className=""
      >
        <Helmet
          meta={[
            {
              name: 'Alec Neevel Professional Portfolio',
              content: 'A professional portfolio website for Alec Neevel, software developer'
            },
          ]} 
          title="Alec Neevel"
        >
        </Helmet>
        <Header/>
          <main
            className="container mx-auto"
          >
            {this.props.children}
          </main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
          </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
