import React, { useState, useEffect } from "react";
import Axios from "axios";
import Background from "../components/Background";
import Form from "../components/Form";
function Homepage() {
  const [movieList, setMovieList] = useState([]);


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

  return (
    <Background>
      <div className="flex justify-center">
        <h1 className="text-white text-6xl font-bold">Movie DB</h1>
      </div>

      <div className="flex flex-col justify-evenly items-center h-screen w-screen">
      <Form/>
        <button onClick={submitHandler} type="button"
        className=" h-20 w-36 text-white bg-gradient-to-r from-green-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </div>
    </Background>
  );
}

export default Homepage;
