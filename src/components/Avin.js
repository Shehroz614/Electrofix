import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get } from "../helpers/FetchApi";
import { useSelector } from "react-redux";

function Avin() {
  const Auth_Token = localStorage.getItem("Auth_Token");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  var x = 0;

  useEffect(() => {
    if (Auth_Token && x === 0 && !state.isLoggedIn) {
      // eslint-disable-next-line
      const user = get("http://localhost:5000/api/auth/getuser").then(
        (user) => {
          dispatch({ type: "SignIn", payload: user });
          console.log(user);
          console.log(Auth_Token);
          x++;
          x++;
        }
      );
    }
  });

  return <div></div>;
}

export default Avin;
