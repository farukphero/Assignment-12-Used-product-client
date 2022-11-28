import React from "react";
import { Link, useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();
  return (
    <div className="h-[600px] md:h-[770px] md:w-[1400px] flex justify-center items-center text-3xl md:text-4xl">
     <div>
     <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Page <i>{error.statusText || error.message}</i>
        
      </p>
      <p  className="text-xl mt-5 text-secondary">Back to <Link className="text-xl" to='/'>Home</Link> </p>
        <img className="mt-6 w-full" src="https://media.istockphoto.com/id/1207750534/photo/404-error-internet-page-not-found-hand-with-magnifier-concept-picture.jpg?b=1&s=170667a&w=0&k=20&c=7NG6vLfv8QzSkhVxJuIUpTUQnoUyoKH_vQbHTPS-DZ8=" alt="" />
     </div>
    </div>
  );
};

export default DisplayError;
