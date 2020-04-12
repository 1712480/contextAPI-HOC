import React from 'react';
import { UserContext } from '../providers/UserProvider';

const withUserContext = Component => {
    return function HOCComponent(props){
        return (
            <UserContext.Consumer>
                {state => <Component {...props} userContext={state} />}
            </UserContext.Consumer>
        )
    }
}

export default withUserContext;