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
<<<<<<< HEAD
    <div className='flex-column flex-end'>
      <Form onInput={formHandler}/>
=======
    <>
      <Form onInput={formHandler} onDelete = {deleteHandler} />
>>>>>>> 2e0dce198d4c9d78f9e41276f8552cdf89fd0dc7
      <List items={list} />
    </>
  );
}

export default App;
