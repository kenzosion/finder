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
        this.props.searchUsers(this.state.text)
        this.setState({ text: ''})
    }

    
    render() {
        const {text} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Github users..." 
                        value={text}
                        onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                <button 
                    className="btn btn-success btn-block"
                    onClick={this.props.clearUsers}>
                    Clear
                </button>
            </div>
        )
    }
}

export default Search
