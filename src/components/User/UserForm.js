import React from 'react';
import withUserContext from '../HOC/withUserContext';

let name, email, active

class UserForm extends React.Component {
    constructor(props){
        super(props);

    }

    addUser = (e) => {
        e.preventDefault();

        this.props.userContext.addUser({
            name: name.value,
            email: email.value,
            active: active.checked
        })

        name.value = '';
        email.value ='';
        active.checked = false;
    }

    render() {
        return (
            <div className="row justify-content-center">
                <form onSubmit={this.addUser} className="card col-6">
                        <div className="form-group">
                            <label className="form-group">name:</label>
                            <input type="text" className="form-control" required ref={node => name = node} />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-group">email:</label>
                            <input type="text" className="form-control" required ref={node => email = node} />
                        </div>

                        <div className="form-group">
                            <label className="form-group">active: </label>
                            <input type="checkBox" ref={node => active = node} />
                        </div>

                        <button className="btn btn-success">Add user</button>
                </form>
            </div>
        )
    }
}

export default withUserContext(UserForm);