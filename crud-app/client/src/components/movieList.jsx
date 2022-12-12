import React,{useState,useEffect} from 'react'
import Axios from "axios";
import MovieItem from './MovieItem';
function MovieList(props) {
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((response) =>{
            setMovieList(response.data);
        });
    });
    return (
        <div>
            {props.addList.map((item)=>{
                return <MovieItem movieName = {item.movieName} movieReview = {item.movieReview}/>
            })}
        </div>
    )
}

export default MovieList