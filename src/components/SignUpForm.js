import React from "react";
import { motion } from "framer-motion";

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
        <label style={{ marginLeft: "5px", fontSize: "14px", width: "57%" }}>
          Date of Birth
        </label>
        <input
          type="date"
          id="date"
          class="date"
          name="date"
          placeholder="Date of birth"
        />
      </div>
      <motion.button
        whileTap={{ scale: 0.99 }}
        onClick={(e) => {
          e.preventDefault();
        }}
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
