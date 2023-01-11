import React from "react";
import SignUpForm from "./SignUpForm";
import Axios from "axios";
function SignUpContainer() {
  const userHandler = (user) => {
    Axios.get(`http://localhost:3001/api/${user}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create Account
        </h1>
        <SignUpForm user={userHandler} />
      </div>
    </div>
  );
}

export default SignUpContainer;
