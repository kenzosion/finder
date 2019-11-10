import React, {Fragment, Component } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            following,
            followers,
            public_repos,
            public_gists,
            hirable
        } = this.props.user

        const { loading } = this.props;

        if(loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className="btn btn-light">
                    Back to search
                </Link>  
            </Fragment>
        )
    }
}

export default User
