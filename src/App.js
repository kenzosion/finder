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

  render() {
    const {loading, users} = this.state;
    return (
      <div className="App">
       <Navbar title="Github finder" icon="fab fa-github"/>
         <div className="container">
           <Search />
           <Users loading={loading} users={users}/>
         </div>
      </div>
    );
  }
}

export default App;
