import React from 'react';
import Button from '../Filter/Button';
import { Filter } from '../providers/FilterProvider';
import withFilterContext from '../HOC/withFilterContext';

class FilterButtons extends React.Component {
    render() {
        const context = this.props.filterContext

        return (
            <div className="row justify-content-center">
                <label className="w-100 d-flex justify-content-center">Filter</label>

                <ul className="pagination">
                    <Button filter={Filter.SHOW_ALL}
                            active={context.currentFilter === Filter.SHOW_ALL}
                            onClick={() => context.setFilter(Filter.SHOW_ALL)}>
                        ALL
                    </Button>

                    <Button filter={Filter.SHOW_ACTIVE}
                            active={context.currentFilter === Filter.SHOW_ACTIVE}
                            onClick={() => context.setFilter(Filter.SHOW_ACTIVE)}>
                        ACTIVE
                    </Button>

                    <Button filter={Filter.SHOW_NON_ACTIVE}
                            active={context.currentFilter === Filter.SHOW_NON_ACTIVE}
                            onClick={() => context.setFilter(Filter.SHOW_NON_ACTIVE)}>
                        NON ACTIVE
                    </Button>
                </ul>
            </div>
        )
    }
    
}

export default withFilterContext(FilterButtons);