import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";

function SignInForm(props) {
  return (
    <div className="SignInform">
      <h4 style={{ fontWeight: "500" }}>Sign In</h4>
      <input type="email" id="email" name="email" placeholder="Email" />

      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize: "13px",width:"100%" }}>
      <input style={{marginRight:"10px"}} type="CheckBox" id="isAdmin" name="isAdmin"/>
      <label for="isAdmin">Sign In as Admin</label>
      </div>
      <motion.button
        whileTap={{ scale: 0.99 }}
        onClick={(e) => {
          e.preventDefault();
        }}
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
    </div>
  );
}

export default SignInForm;
