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
            company,
            html_url,
            following,
            followers,
            public_repos,
            public_gists,
            // hirable
        } = this.props.user

        const { loading } = this.props;

        if(loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className="btn btn-light">
                    Back to search
                </Link>  
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{width: '150px'}} alt="avatar"/>
                        <h1>{name}</h1>
                        <h2>{location}</h2>
                    </div>
                    <div>
                         <ul>
                             <li>
                                {login && 
                                <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>}
                             </li>
                            <li>
                                {company &&
                                    <Fragment>
                                        <strong>Company:</strong> {login}
                                    </Fragment>}
                            </li>
                            <li>
                                {blog &&
                                    <Fragment>
                                        <strong>Website:</strong> {login}
                                    </Fragment>}
                            </li>
                         </ul>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <h5>{bio}</h5>
                            </Fragment>)}
                        <a href={html_url} className="btn btn-success my-1">Visit Github</a>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-dark">Followers: {followers}</div>
                    <div className="badge badge-dark">Following: {following}</div>
                    <div className="badge badge-dark">Public repos: {public_repos}</div>
                    <div className="badge badge-dark">Public gists: {public_gists}</div>
                </div>
            </Fragment>
        )
    }
}

export default User
