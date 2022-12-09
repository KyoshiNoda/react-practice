import React from 'react'

function movieList(props) {
  return (
    <div>
        {props.addList.map((item)=>{
            return (
            <div className='my-4 font-bold bg-white rounded'>
                <h1>Title: {item.movieName}</h1>
                <p>Rating:{item.movieReview}</p>
            </div>
            );
        })}
    </div>
  )
}

export default movieList