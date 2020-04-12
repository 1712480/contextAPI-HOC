import React, { createContext, Component } from 'react';

export const UserContext = createContext();

let nextID = 5;

class UserContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [
                {
                    id: 1,
                    name: 'Hung',
                    email: 'hung@pyco.com',
                    active: true
                },
                {
                    id: 2,
                    name: 'Long',
                    email: 'long@pyco.com',
                    active: false
                },
                {
                    id: 3,
                    name: 'Binh',
                    email: 'binh@pyco.com',
                    active: false
                },
                {
                    id: 4,
                    name: 'Chau',
                    email: 'chau@pyco.com',
                    active: true
                }
            ],
        }
    }

    addUser = (user) => {
        const newUser = {
            id: nextID++,
            ...user,
        }

        this.setState((previousState) => ({
            user: [...previousState.user, newUser],
        }))
    }

    deleteUser = (id) => {
        this.setState((previousState) => {
            const newList = previousState.user.filter((user) => (
                user.id !== id
            ))

            return { user: newList }
        })
    }

    render() {
        return (
            <UserContext.Provider value={{ user: this.state.user, addUser: this.addUser, deleteUser: this.deleteUser }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserContextProvider;