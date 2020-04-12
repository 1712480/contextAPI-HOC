import React  from 'react';

function Button({ children, onClick, active }) {
    return (
    <button className="btn btn-primary" 
            disabled={active}
            onClick={onClick} >
        {children}
    </button>
    )
}

export default Button;