import React, { useState } from 'react';
import Container from './Container';
import Button from './Button';
const Form = (props) => {

    const [item, setItem] = useState();

    const formHandler = (event) =>{
        console.log("clicked!");
        event.preventDefault();
        if (item.trim().length === 0){
            return;
        }
        props.onInput(item);
    };

    const itemHandler = (event) => {
        setItem(event.target.value)
        console.log(item);
    };

    return (
        <Container colors = "bg-blue-600">
            <div className='container'>
                <form onSubmit={formHandler}>
                    <label className="block text-white text-center text-2xl" htmlFor='input'>To Do List</label>

                    <div className='flex justify-center mb-4'>
                        <input className=""
                            type='text'
                            id='input'
                            value={item}
                            onChange={itemHandler}
                        />
                    </div>
                    <div className='flex justify-center'>
                    <Button type = "submit">Submit</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default Form;
