import React from 'react';
import Container from './Container';
const Form = () => {
    return (
        <Container>
            <div className='container'>
                    <label className = "block text-white text-center text-2xl" htmlFor='input'>To do</label>

                    <div className='flex justify-center'>
                        <input classname = "" type = 'text' id = 'input'/>
                    </div>
            </div>
        </Container>
    );
}

export default Form;
