import React,{useState} from 'react';
import Container from './Container';
const Form = () => {

    const [item,setItem] = useState();

    const itemHandler = (event) =>{
        setItem(event.target.value)
        console.log(item);
    };
    
    return (
        <Container>
            <div className='container'>
                    <label className = "block text-white text-center text-2xl" htmlFor='input'>To do</label>

                    <div className='flex justify-center'>
                        <input className = "" 
                        type = 'text' 
                        id = 'input'
                        value = {item}
                        onChange = {itemHandler}
                        />
                    </div>
            </div>
        </Container>
    );
}

export default Form;
