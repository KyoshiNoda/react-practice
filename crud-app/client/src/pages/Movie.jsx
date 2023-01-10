import React from "react";
import Background from "../components/Background";
function Movie() {
  return (
    <Background>
      <div className=" flex justify-center">
        <div className="bg-white rounded w-1/2 h-96 p-5">
          <div className=" text-center">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="movie"
              >
                Is your movie in the database?
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="movie"
                type="text"
                placeholder="movie"
              />
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Movie;
