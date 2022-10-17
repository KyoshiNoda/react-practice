import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
function App() {

  const [list, setList] = useState([]);


  const formHandler = (input) => {
    if (list.length === 10){
      console.log(list);
      setList([]);
      alert("too much!");
      console.log(list);
      return;
    }
    setList((previousList) => {
      return [
        ...previousList,
        { id: Math.random().toString, item: input }
      ]
    })
  };
  
  const deleteHandler = () =>{
    setList([]);
    return;
  };
  return (
    <>
      <Form onInput={formHandler} onDelete = {deleteHandler} />
      <List items={list} />
    </>
  );
}

export default App;
