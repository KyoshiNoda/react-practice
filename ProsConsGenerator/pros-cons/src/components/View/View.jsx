import React from 'react';
import ViewGroup from './ViewGroup/ViewGroup';
import ViewList from './ViewList/ViewList';
const View = props =>{
    return(
        <div>
          <ViewGroup/>
          <ViewList/>
        </div>
    );
};

export default View;