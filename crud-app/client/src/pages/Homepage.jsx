import React, { useState, useEffect } from "react";
import Axios from "axios";
function Homepage() {
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
    }).then(() => {
      alert("successful insert");
    });
  };
  const movieNameHandler = (event) =>{
    setMovieName(event.target.value);
  };
  const movieReviewHandler = (event) =>{
    setReview(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-center">
        <h1 className="text-white text-6xl font-bold">Movie DB</h1>
      </div>
      <div className="flex flex-col justify-evenly items-center h-screen w-screen">
        <div>
          <div>
            <label>Movie Name:</label>
            <div>
              <input type="text" name="movieName" onChange={movieNameHandler} />
            </div>
          </div>
          <div>
            <label>Review: </label>
            <div>
              <input type="text" name="review" onChange={movieReviewHandler} />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={submitHandler}
            type="button"
            className=" h-20 w-36 text-white bg-gradient-to-r from-green-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>

          <div className="bg-white h-96 w-96 rounded flex items-center">
            <ol>
            {movieList.map((value) =>{
              return (<li key = {value.id}>- {value.name} ... {value.review}</li>);
            }
            )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
