import React, { useState } from 'react';
const Form = (props) => {

    const [item, setItem] = useState();

    const formHandler = (event) => {
        event.preventDefault();
        if (item.trim().length === 0) {
            return;
        }
        props.onInput(item);
    };

    const itemHandler = (event) => {
        setItem(event.target.value);
    };

    const deleteListHandler = (props) => {
        console.log("delete!");
        props.onDelete();
    };

    return (
        <div className="container rounded mx-auto w-1/2 bg-blue-300 flex h-60 items-center justify-center">
            <form onSubmit={formHandler}>
                <label className="block text-white text-center text-3xl" htmlFor='input'>To Do List</label>

                <div className='flex justify-center mb-4'>
                    <input className=""
                        type='text'
                        id='input'
                        value={item}
                        onChange={itemHandler}
                    />
                </div>
                <div className='flex justify-center'>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                        type="submit">
                        Submit
                    </button>

                    <button
                        className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
                        type="button"
                        onClick={deleteListHandler}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
