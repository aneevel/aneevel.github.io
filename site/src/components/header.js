import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './header.css';

const Header = ({ siteTitle, description, navLinks,  }) => (
    <Container>
        <header>
            <Row>
                <div>
                    <h1>
                        <Link
                        to="/"
                        >
                        {siteTitle}
                        </Link>
                    </h1>
                </div>
            </Row>
        </header>
    </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
