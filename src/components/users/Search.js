import React, { useState } from 'react'


const Search = ({ showClear, clearUsers, setAlert, searchUsers }) => {
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
            searchUsers(text)
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
