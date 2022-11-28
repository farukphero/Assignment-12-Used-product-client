import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if(email){
        fetch(`https://used-product-resale-server.vercel.app/jwt?email=${email}`)
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
