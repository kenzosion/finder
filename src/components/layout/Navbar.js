import React, { Component } from 'react'

export class Navbar extends Component {
    static defaultProps = {
        title: 'finder',
        icon: "fab fa-github"
    }

    render() {
    const {title, icon} = this.props;
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon} />
                    {title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
