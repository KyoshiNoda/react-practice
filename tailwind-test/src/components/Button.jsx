import React from 'react';

const Button = (props) => {
    return (
        <button
            className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            type = {props.type || 'button'}
            onClick = {props.onClick}
        >
        {props.children}
        </button>
    );
}

export default Button;
