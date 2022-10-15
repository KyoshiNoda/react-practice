import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
function App() {

  const [list, setList] = useState([]);


  const formHandler = (input) => {
    setList((previousList) => {
      return [
        ...previousList,
        { id: Math.random().toString, item: input }
      ]
    })
  };



  return (
    <>
      <Form onInput={formHandler} />
      <List items={list} />
    </>
  );
}

export default App;
