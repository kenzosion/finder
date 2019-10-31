import React, { Component } from 'react'


class Search extends Component {
    state = {
        text: ''
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        // alert users to enter some text
        if (this.state.text === ''){
            this.props.setAlert('Please enter a user name', 'light')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: ''})
        }
    }

    
    render() {
        const {text} = this.state;
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Github users..." 
                        value={text}
                        onChange={this.onChange}/>
                    <span className="grid-2">
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                    {showClear && <input
                        className="btn btn-dark btn-block text-center"
                        onClick={clearUsers}
                        value="Clear"/>}
                    </span>
                </form>
            </div>
        )
    }
}

export default Search
