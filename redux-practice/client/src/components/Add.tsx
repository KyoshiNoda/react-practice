import {useRef} from 'react'
import { addPerson } from '../store/feat/personSlice';
import { useAppDispatch } from '../store/store';

type Props = {}

function Add({}: Props) {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();
  const inputHandler = (event : React.ChangeEvent<HTMLInputElement>) =>{
      name.current = event.target.value;
  }
  const buttonHandler = () =>{
    dispatch(addPerson({name : name.current}))
  }
  return (
    <form className='border rounded p-2 shadow-md m-2'>
      <label htmlFor=''>Person name</label>
      <input className='border rounded-md p-2 mx-2' onChange={inputHandler}/>
      <button className='bg-violet-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700' onClick={buttonHandler}>Add</button>
    </form>
  )
}

export default Add