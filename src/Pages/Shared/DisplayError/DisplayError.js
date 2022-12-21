import React from "react";
import { Link, useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();
  return (
    
     <div className="md:w-[1400px] md:flex justify-center items-center w-11/12 mx-auto">
     <div className="md:h-[800px] flex justify-center items-center">
    <div>
    <h1 className="text-5xl mt-10 md:mt-0">Oops!</h1>
      <p className="text-3xl mt-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl mt-2">
        <i className="text-red-600">Page {error.statusText || error.message}</i>
        
      </p>
      <p  className="text-xl mt-5 text-secondary">Back to <Link className="text-xl underline" to='/'>Home</Link> </p>
    </div>
     </div>
        <img className="" src="https://cloud.mongodb.com/static/images/sadface.gif" alt="" />
     </div>
    
  );
};

export default DisplayError;
