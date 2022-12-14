import React, { useState } from "react";
import SignInForm from "../components/SignInForm.js";
import SignUpForm from "../components/SignUpForm.js";
import SignInLeft from "../components/SignInLeft.js";

function SignIn() {
  
  // eslint-disable-next-line
  const [signUp, setSignUp]= useState(false);
  // eslint-disable-next-line
  const [signIn, setSignIn]= useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="SignInpage">
      <SignInLeft/>
      <div className="form">
        { signIn &&        <SignInForm setSignUp={setSignUp} setSignIn={setSignIn} open={open} setOpen={setOpen}/>}
        { signUp &&        <SignUpForm setSignUp={setSignUp} setSignIn={setSignIn}  open={open} setOpen={setOpen}/>}
      </div>
    </div>
  );
}

export default SignIn;
