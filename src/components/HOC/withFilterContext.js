import React from 'react';
import { FilterContext } from '../providers/FilterProvider';

const withFilterContext = Component => {
    return function HOCComponent(props){
        return (
            <FilterContext.Consumer>
                {state => <Component {...props} filterContext={state} />}
            </FilterContext.Consumer>
        )
    }
}

export default withFilterContext;