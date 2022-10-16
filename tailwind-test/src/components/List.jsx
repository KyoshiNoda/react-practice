import React from 'react';
const List = (props) => {


    return (    
        <div className='container rounded mx-auto w-1/2 bg-slate-600 flex h-60 items-center justify-center'>
            <ul>
                {props.items.map((node) =>(
                    <li key = {node.id}>
                        {node.item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
