import React from 'react'

function MovieItem(props) {
  const deleteHandler = () =>{
    console.log("deleted!");
  };
  const updateHandler = () =>{
    console.log("updated!");
  };
  return (
    <div className='px-2 py-2 my-4 font-bold bg-white rounded'>
        <div>
            <h1>Title: {props.movieName}</h1>
            <p>Rating:{props.movieReview}</p>
        </div>
        <div className='flex gap-2'>
            <button
                className='bg-transparent text-blue-700 font-semibold py-1 px-3 border border-blue-500 rounded'
                onClick={updateHandler}
            >
                Update
            </button>
            <button
                className='bg-transparent text-blue-700 font-semibold py-1 px-3 border border-blue-500 rounded'
                onClick={deleteHandler}
            >
                Delete
            </button>
        </div>
    </div>
  )
}

export default MovieItem