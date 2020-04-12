import React from 'react';
import withUserContext from '../HOC/withUserContext';
import withFilterContext from '../HOC/withFilterContext';
import { Filter } from '../providers/FilterProvider';
import Row from './UserRow';

class UserTable extends React.Component {    
    render() {
        const { user, deleteUser } = this.props.userContext;
        const { currentFilter } = this.props.filterContext;
        let userList = []

        switch (currentFilter) {
            case Filter.SHOW_ACTIVE:
                userList = user.filter(user => (
                    user.active === true
                ))
                break;
            case Filter.SHOW_NON_ACTIVE:
                userList = user.filter(user => (
                    user.active === false
                )) 
                break;
            default:
                userList = [...user];
                break;
        }

        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">active</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map(user => (
                            <Row key={user.id} user={user} deleteUser={deleteUser}/>
                        ))}
                    </tbody>
                </table>               
            </div>
        )
    }
}

export default withFilterContext(withUserContext(UserTable));