import React, { useState } from "react";
import { motion } from "framer-motion";
import { SignUp } from "../helpers/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignUpForm(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [values, setValues] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const HandleSignUp = async () => {
    const credentials = {
      email: values.email.toLowerCase(),
      password: values.password,
      Cpassword: values.Cpassword,
      fname: values.fname,
      lname: values.lname,
      city: values.city,
      DOB: values.DOB,
      userType: values.userType,
      phone: values.phone,
    };


    if (credentials.password !== credentials.Cpassword) {
      window.alert("Password and conform password are not same");
    } else if (
      !credentials.fname ||
      !credentials.lname ||
      credentials.lname.length < 3 ||
      credentials.fname.length < 3
    ) {
      window.alert("Name should be atleast 3 letters long");
    } else if (
      !credentials.city ||
      !credentials.phone ||
      !credentials.phone ||
      !credentials.userType ||
      !credentials.DOB ||
      credentials.city.length < 3
    ) {
      window.alert("Enter all fields");
    } else {
      const done = await SignUp(credentials, dispatch, state);
      if(done){
        navigate("/");
       }
    }
  };

  return (
    <div className="SignUpform">
      <h4 style={{ fontWeight: "500" }}>Sign Up</h4>
      <div
        className="inputs"
        style={{ display: "flex", gap: "10px", width: "100%" }}
      >
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <div className="inputs">
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          id="Cpassword"
          name="Cpassword"
          onChange={handleChange}
          placeholder="Confirm Password"
        />
      </div>
      <div className="inputs">
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
          placeholder="City"
        />

        <select className="userType" name="userType" onChange={handleChange}>
          <option value=" " disabled selected>
            Account Type
          </option>
          <option value="client">Client</option>
          <option value="agent">Agent</option>
        </select>
      </div>
      <div className="inputs">
        <input
          type="text"
          name="phone"
          id="phone"
          className="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
        ></input>
        <input
          style={{ paddingTop: "4px", paddingbottom: "3px" }}
          type="date"
          id="DOB"
          className="DOB"
          name="DOB"
          onChange={handleChange}
          placeholder="Date of birth"
        />
      </div>
      <motion.button whileTap={{ scale: 0.99 }} onClick={HandleSignUp}>
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
