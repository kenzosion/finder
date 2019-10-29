import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users' 
import Search from './components/users/Search' 

import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false

  }

  async componentDidMount() {
    this.setState({ loading: true})
    const res = await axios.get('https://api.github.com/users');
    this.setState({users: res.data, loading: false})
    console.log(res.data)
  }

  searchUsers = async text => {
    this.setState({ loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({users: res.data.items, loading: false})
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false})
  }

  render() {
    const {loading, users} = this.state;
    return (
      <div className="App">
       <Navbar title="Github finder" icon="fab fa-github"/>
         <div className="container">
           <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}/>
           <Users loading={loading} users={users}/>
         </div>
      </div>
    );
  }
}

export default App;
