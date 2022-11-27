import React from "react";
import { useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();
  return (
    <div className="h-[400px] w-2/3 flex justify-center items-center text-5xl">
     <div>
     <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Page <i>{error.statusText || error.message}</i>
      </p>
     </div>
    </div>
  );
};

export default DisplayError;
