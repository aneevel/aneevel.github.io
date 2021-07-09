import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css";

const Header = ({ siteTitle }) => {



  return (
    <header
      className="w-full fixed top-0 z-10 pt-2"
      style={{
        background: `#673C4F`,
      }}
    >
      <nav
        className="flex justify-between items-center mx-auto px-8 py-2"
      >
        <ul
          className="flex space-x-10"
        >
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#my-skills">Skills</a></li>
          <li><a href="#my-projects">Projects</a></li>
          <li><a href="#contact">Get in Touch!</a></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
