import React from 'react'

function movieList(props) {
  return (
    <div>
        {props.addList.map((item)=>{
            console.log(item);
            return (
            <div className='text-white bg-green-400 h-1 w-1'>
                <h1>{item.movieName}</h1>
                <p>{item.movieReview}</p>
            </div>
            );
        })}
    </div>
  )
}

export default movieList