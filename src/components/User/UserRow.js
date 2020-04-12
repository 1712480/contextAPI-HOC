import React from 'react';

const UserRow = ({ deleteUser, user }) => {
    return (
        <tr>
            <th scope="row">{user.id ? user.id : ''}</th>
            <td>{user.name ? user.name : ''}</td>
            <td>{user.email ? user.email : ''}</td>
            <td>{user.active ? 'true' : 'false'}</td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>DELETE</button>
            </td>
        </tr>
    )
}

export default UserRow;