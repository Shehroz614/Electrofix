import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Signin } from "../helpers/Auth";
import { useNavigate } from "react-router-dom";
import SignInModal from "./SignInModal";

function SignInForm(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [values, setValues] = useState(null);
  const navigate = useNavigate();
  const [desc, setDesc]= useState(" ") ;


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const HandleSignIn = async () => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
 
  
   const done = await Signin(credentials, dispatch, state);
   if(done){
    navigate("/");
   }
   else{
    setDesc("Invalid Credentials")
      props.setOpen(true);
   }
  };

  return (
    <div className="SignInform">
      
      <h4 style={{ fontWeight: "500" }}>Sign In</h4>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          fontSize: "13px",
          width: "100%",
        }}
      >
        <input
          style={{ marginRight: "10px" }}
          type="CheckBox"
          id="isAdmin"
          name="isAdmin"
        />
        <label htmlFor="isAdmin">Sign In as Admin</label>
      </div>
      <motion.button
        whileTap={{ scale: 0.99 }}
        onClick={
          // () => {HandleSignIn(dispatch, state);}
          HandleSignIn
        }
      >
        Sign In
      </motion.button>
      <div id="forgotP">
        <a href="/SignIn"> Forgot password </a>
      </div>
      <div style={{ fontSize: "13px" }}>Or Sign in with</div>
      <div className="AltSignIn">
        <div>
          <GoogleIcon sx={{ color: "red" }} />
          <span>Login with Google</span>
        </div>

        <div>
          <FacebookIcon sx={{ color: "blue" }} />
          <span>Login with Facebook</span>
        </div>
      </div>
      <div style={{ fontSize: "13px" }}>Dont have an account?</div>
      <motion.button
        whileTap={{ scale: 0.99 }}
        onClick={(e) => {
          e.preventDefault();
          props.setSignIn(false);
          props.setSignUp(true);
        }}
        className="noAccount"
      >
        Sign Up
      </motion.button>
      {props.open && <SignInModal open={props.open} setOpen={props.setOpen} desc={desc} />}
    </div>
  );
}

export default SignInForm;
