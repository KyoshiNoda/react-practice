import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [username,setUsername] = useState('');
    const [age,setAge] = useState('');
    const [error,setError] = useState('');

    const formHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0){
            setError({
                title: 'Invalid Username',
                message: 'Please input a valid username'
            });
            return; 
        }
        if (+age < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please input a valid age'
            });
            return; 
        }
        props.addUser(username,age);
        setUsername('');
        setAge('');
    };
    const usernameHandler = (event) => { setUsername(event.target.value);};
    const ageHandler = (event) => { setAge(event.target.value); };
    const errorHandler = () =>{
        setError(null);
    };


    return (
        <div>
            {error && (
                <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>
            )}
            <Card className = {classes.input}>
                <form onSubmit={formHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                    type = 'username' 
                    id = 'username' 
                    onChange={usernameHandler} 
                    value = {username}/>

                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                    type = 'number' 
                    id = 'age' 
                    onChange={ageHandler} 
                    value = {age}/>

                    <Button type = "submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;