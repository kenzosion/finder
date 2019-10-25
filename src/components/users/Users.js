import React, { Component } from 'react'

class Users extends Component {
    state = {
        users:[
        {
        login: "mojombo",
        id: 1,
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
         },
         {
            login: "mojombo",
            id: 1,
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo",
             },
             {
                login: "mojombo",
                id: 1,
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
                 }
    ]}

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <div key={user.id}>{user.login}</div>
                ))}
            </div>
        )
    }
}

export default Users
