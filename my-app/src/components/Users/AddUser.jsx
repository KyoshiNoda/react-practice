import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [username,setUsername] = useState();
    const [age,setAge] = useState();

    const formHandler = (event) => {
        if (username.trim() === 0 || age.trim() === 0){ return; }
        if (+age < 1){ return; }
        props.addUser(username,age);

        event.preventDefault();
    };
    const usernameHandler = (event) => { setUsername(event.target.value); }
    const ageHandler = (event) => { setAge(event.target.value); }



    return (
    <Card className = {classes.input}>
        <form onSubmit={formHandler}>
            <label htmlFor='username'>Username</label>
            <input type = 'username' id = 'username' onChange={usernameHandler}/>

            <label htmlFor='age'>Age (Years)</label>
            <input type = 'number' id = 'age' onChange={ageHandler}/>

            <Button type = "submit">Add User</Button>
        </form>
    </Card>
    
    );
};

export default AddUser;