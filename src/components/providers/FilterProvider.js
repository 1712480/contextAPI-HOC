import React, { createContext } from 'react';
 
export const FilterContext = createContext();

export const Filter = {
    SHOW_ALL: "SHOW ALL",
    SHOW_ACTIVE: "SHOW ACTIVE",
    SHOW_NON_ACTIVE: "SHOW NON ACTIVE"
}

class FilterContextProvider extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentFilter: Filter.SHOW_ALL,
        }
    }

    setFilter = (filter) => {
        this.setState({ currentFilter: filter });
    }

    render() {
        return (
            <FilterContext.Provider value={{    
                                    currentFilter: this.state.currentFilter, 
                                    setFilter: this.setFilter }}>
                {this.props.children}
            </FilterContext.Provider>
        )
    }
}

export default FilterContextProvider;