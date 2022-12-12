import React from 'react';  
import MovieItem from './MovieItem';
function MovieList(props) {
    return (
        <div>
            {props.addList.map((item)=>{
                return <MovieItem movieName = {item.movieName} movieReview = {item.movieReview}/>
            })}
        </div>
    )
}

export default MovieList