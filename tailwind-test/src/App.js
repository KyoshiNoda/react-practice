import React, {useState} from 'react';
import Container from './components/Container';
import Form from './components/Form';
import List from './components/List';
function App() {

  const [list,setList] = useState([]);


  const formHandler = (input) =>{
    setList((previousList) =>{
      return [
        ...previousList,
        {id: Math.random().toString, item: input}
      ]
    })
  };



  return (
    <>
      <Form onInput = {formHandler}/>
      {/* <List/> */}
      
    </>
  );
}

export default App;
