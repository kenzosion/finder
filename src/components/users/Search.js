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
                <form onSubmit={this.onSubmit} className="form ">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Github users..." 
                        value={text}
                        onChange={this.onChange}/>
                    <span className="grid-2">
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                    {this.props.showClear && <input
                        className="btn btn-dark btn-block text-center"
                        onClick={this.props.clearUsers}
                        value="Clear"/>}
                    </span>
                </form>
            </div>
        )
    }
}

export default Search
