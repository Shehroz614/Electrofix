import React from "react";
import { motion } from "framer-motion";
import {post, get} from "../helpers/FetchApi"

async function handleSignUp(e) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;

  e.preventDefault();
  const data = {
    email: email,
    password: password,
    fname : fname,
    lname : lname
  };
  const url = "http://localhost:5000/api/auth/";

  const response = await post(url, data);
  localStorage.setItem("Auth_Token", response);
  if(response!=="User Already Exists"){
  const user = await get("http://localhost:5000/api/auth/getuser");
    console.log(user)
    window.alert(`signed up with following Auth Token \n ${response} \n\n and the user is ${user.fname+" "+user.lname}`)
    }
    console.log(response);
}


function SignUpForm(props) {
  return (
    <div className="SignUpform">
      <h4 style={{ fontWeight: "500" }}>Sign Up</h4>
      <div className="inputs" style={{ display: "flex", gap: "10px", width: "100%" }}>
        <input type="text" id="fname" name="fname" placeholder="First Name" />
        <input type="text" id="lname" name="lname" placeholder="Last Name" />
      </div>
      <input type="email" id="email" name="email" placeholder="Email" />
      <div className="inputs">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          id="Cpassword"
          name="Cpassword"
          placeholder="Confirm Password"
        />
      </div>
      <div className="inputs">
        <input type="text" id="city" name="city" placeholder="City" />

        <select class="userType" name="userType">
          <option value="" disabled selected>
            Account Type
          </option>
          <option value="1">Customer</option>
          <option value="2">Service Provider</option>
        </select>
      </div>
      <div className="inputs">
        <input type="text" name="phone" id="phone" class="phone" placeholder="Mobile Number"></input>
        <input style={{paddingTop:"4px", paddingbottom:"3px"}}
          type="date"
          id="DOB"
          class="DOB"
          name="DOB"
          placeholder="Date of birth"
        />
      </div>
      <motion.button
        whileTap={{ scale: 0.99 }}
        onClick={handleSignUp}
      >
        Sign Up
      </motion.button>

      <div style={{ fontSize: "13px" }}>Already have an account?</div>
      <motion.button
        whileTap={{ scale: 0.99 }}
        onClick={(e) => {
          e.preventDefault();
          props.setSignIn(true);
          props.setSignUp(false);
        }}
        className="noAccount"
      >
        Sign In
      </motion.button>
    </div>
  );
}

export default SignUpForm;
