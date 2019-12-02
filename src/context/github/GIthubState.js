import React, {useContext, useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types'

const GithubState = props => {
    const initialState ={
        users: [],
        user: {},
        repos: [],
        loading: false
    } 

 const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        // setUsers(res.data.items)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
       
    }

    const setLoading = () => dispatch({ type: SET_LOADING });


return( <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
    }}>
    {props.children}
</GithubContext.Provider>)
}
export default GithubState;