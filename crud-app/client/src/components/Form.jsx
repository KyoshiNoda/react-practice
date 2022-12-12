import React, { useState } from "react";
import Axios from "axios";
function Form(props) {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");

  const submitHandler = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });
    props.addMovie(movieName, review);
  };
  const movieNameHandler = (event) => { setMovieName(event.target.value); };
  const movieReviewHandler = (event) => { setReview(event.target.value);  };

  return (
    <>
      <div className="my-8">
        <label className="text-white font-bold">Movie Name</label>
        <div>
          <input type="text" name="movieName" onChange={movieNameHandler} />
        </div>

        <label className="text-white font-bold">Review </label>
        <div>
          <input type="text" name="review" onChange={movieReviewHandler} />
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={submitHandler} type="button" className=" h-16 w-32 text-white bg-gradient-to-r from-green-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
        >
            Submit
        </button>
      </div>
    </>
  );
}

export default Form;
