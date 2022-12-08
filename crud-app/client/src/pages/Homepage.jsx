import React, { useState, useEffect } from "react";
import Axios from "axios";
import Background from "../components/Background";
import Form from "../components/Form";
function Homepage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response) =>{
      setMovieList(response.data);
    });
  },[]);
  const submitHandler = (movieName,review) => {
    setMovieList([
      ...movieList,
      {movieName: movieName, movieReview: review}
    ]);
  };

  return (
    <Background>
      <div className="flex justify-center">
        <h1 className="text-white text-6xl font-bold">Movie DB</h1>
      </div>

      <div className="flex flex-col justify-evenly items-center h-screen w-screen">
        <Form addMovie = {submitHandler}/>
      </div>
    </Background>
  );
}

export default Homepage;
