import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'


const User = ({  getUserRepos, repos, match }) => {
    const githubContext = useContext(GithubContext);
    const { user, loading, getUser } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    

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
    } = user;

    if (loading) return <Spinner />

    return (
        <Fragment>
            <Link to='/' className="btn btn-light">
                Back to search
                </Link>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" style={{ width: '150px' }} alt="avatar" />
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
            {/* <Repos repos={repos}/> */}
        </Fragment>
    )
}


export default User;
