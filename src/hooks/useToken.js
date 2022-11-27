import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if(email){
        fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.accessToken) {
          <Loading></Loading>
        }
        else{
          localStorage.setItem("accessToken", data.accessToken);
          setToken(data.accessToken);
        }
      });
    }
  }, [email]);
  return [token];
};
export default useToken;
