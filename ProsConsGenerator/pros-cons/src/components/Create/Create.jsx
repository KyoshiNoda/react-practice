import React from 'react';
import './Create.css'
import CreateGroup from './CreateGroup/CreateGroup';
import CreateList from './CreateList/CreateList';
const Create = props =>{
    return(
        <div>
            <CreateList/>
            <CreateGroup/>
        </div>
    );
}

export default Create;