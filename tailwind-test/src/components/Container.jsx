import React from 'react';

const Container = (props) => {
    return (
        <div className={`container rounded mx-auto w-1/2 ${props.colors} flex h-60 items-center justify-center`}>
            {props.children}
        </div>
    );
}

export default Container;
