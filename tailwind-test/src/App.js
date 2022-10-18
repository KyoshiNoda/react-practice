import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
function App() {

  const [list, setList] = useState([]);


  const formHandler = (input) => {
    if (list.length === 10){
      console.log(list);
      alert("too much!");
      return;
    }
    setList((previousList) => {
      return [
        ...previousList,
        { id: Math.random().toString, item: input }
      ]
    })
  };

  return (
    <div className='flex-column flex-end'>
      <Form onInput={formHandler}/>
      <List items={list} />
    </div>
  );
}

export default App;
