import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2rem'
}

const Users = ({users, loading}) => {
    if(loading) {
        return <Spinner />
    } else {
        return  <div style={userStyle}>
                    {users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                 </div>
    }
    }

UserItem.propTypes = {
    users: PropTypes.array,
    loading: PropTypes.bool
}

export default Users
