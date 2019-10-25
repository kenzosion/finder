import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {
    static defaultProps = {
        title: 'finder',
        icon: "fab fa-github"
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
    const {title, icon} = this.props;
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className={icon} style={{marginRight:'1rem'}} />
                {title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
