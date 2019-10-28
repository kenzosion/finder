import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title, icon}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className={icon} style={{marginRight:'1rem'}} />
                {title}
                </h1>
            </nav>
        )
    }

    Navbar.defaultProps = {
        title: 'finder',
        icon: "fab fa-github"
    }
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }


export default Navbar
