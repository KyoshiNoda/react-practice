import React, {useState} from "react";
function Homepage() {
  const [name,setName] = useState();
  const [review ,setReview] = useState();

  const movieNameHandler = (event) =>{
    setName(event.target.value);
    console.log(name);
  };
  const reviewHandler = (event) => {
    setReview(event.target.value);
    console.log(review);
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
              <input type="text" name="movieName" onChange={movieNameHandler}/>
            </div>
          </div>
          <div>
            <label>Review: </label>
            <div>
              <input type="text" name="review" onChange={reviewHandler}/>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className=" h-20 w-36 text-white bg-gradient-to-r from-green-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
