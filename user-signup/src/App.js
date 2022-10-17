import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {

  const [list,setList] = useState([]);
  
  const addUserHandler = (uName,uAge) =>{
    setList((previousList) =>{
      return [
        ...previousList,
        {name: uName, age: uAge, id: Math.random().toString()}
      ]
    })

  }
  return (
    <>
    <div className = "flex-column align-middle">
      <AddUser addUser ={addUserHandler}/>
      <UsersList users = {list}/>
    </div>
    </>
  );
}

export default App;