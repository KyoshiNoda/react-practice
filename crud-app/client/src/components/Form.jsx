import React,{useState,useEffect} from 'react'
import Axios from "axios";
function Form(props) {
    const [movieName, setMovieName] = useState("");
    const [review, setReview] = useState("");
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
      Axios.get("http://localhost:3001/api/get").then((response) =>{
        setMovieList(response.data);
      });
    },[]);
  
    const submitHandler = () => {
      Axios.post("http://localhost:3001/api/insert", {
        movieName: movieName,
        movieReview: review,
      });
  
      setMovieList([
        ...movieList,
        {movieName: movieName, movieReview: review}
      ]);
    };
    const movieNameHandler = (event) =>{
      setMovieName(event.target.value);
    };
    const movieReviewHandler = (event) =>{
      setReview(event.target.value);
    };
  
  return (
    <div> 
        <label>Movie Name</label>
        <div>
            <input type="text" name="movieName" onChange={movieNameHandler} />
        </div>
        <label>Review </label>
        <div>
            <input type="text" name="review" onChange={movieReviewHandler} />
        </div>
    </div>
  )
}

export default Form