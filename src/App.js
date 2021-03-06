import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import Search from './components/users/Search'
import About from './components/pages/About'
import User from './components/users/User'

import GithubState from './context/github/GIthubState'

import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);


  useEffect(() => {
    async () => {
      setLoading(true);
      const res = await axios.get('https://api.github.com/users');
      setUsers(res.data)
      setLoading(false)
    }
  }, [])


  const setAlertMsg = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

 

  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5`);
    setRepos(res.data)
    setLoading(false)
  }


  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>

              {/* support multiple components in one route */}
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                   
                    setAlert={setAlertMsg} />
                  <Users />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User 
                 
                  getUserRepos={getUserRepos}
                  {...props}
                
                  repos={repos} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}


export default App
