import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'


const Search = ({ showClear, clearUsers, setAlert }) => {
    const githubContext = useContext(GithubContext);
    const [text, setText] = useState('');

    const onChange = (event) => {
        setText(event.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        // alert users to enter some text
        if (text === '') {
            setAlert('Please enter a user name', 'light')
        } else {
            githubContext.searchUsers(text)
            setText('')
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search Github users..."
                    value={text}
                    onChange={onChange} />
                <span className="grid-2">
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                    {showClear && <input
                        className="btn btn-dark btn-block text-center"
                        onClick={clearUsers}
                        value="Clear" />}
                </span>
            </form>
        </div>
    )
}


export default Search
