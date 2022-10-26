import { post, get } from "../helpers/FetchApi";

export const Signin = async (credentials, dispatch, state) => {
  const data = {
    email: credentials.email,
    password: credentials.password,
  };

  const url = "http://localhost:5000/api/auth/Signin";

  const response = await post(url, data);
  if (response === "Invalid email") {
    console.log("Enter valid email");
    return false;
  } else if (response === "Invalid credentials") {
    console.log("Enter valid password");
    return false;
  } else {
    localStorage.setItem("Auth_Token", response);
    console.log(localStorage.getItem("Auth_Token"));
    const user = await get("http://localhost:5000/api/auth/getuser");
    console.log(user);
    dispatch({ type: "SignIn", payload: user });
    return true;
  }
};

export const SignUp = async (credentials, dispatch, state) => {
  const data = {
    email: credentials.email,
    password: credentials.password,
    fname: credentials.fname,
    lname: credentials.lname,
    city: credentials.city,
    DOB: credentials.DOB,
    userType: credentials.userType,
    phone: credentials.phone,
  };
  console.log(credentials)
  const url = "http://localhost:5000/api/auth/";

  const response = await post(url, data);
  if (response !== "User Already Exists" && !response.errors) {
    localStorage.setItem("Auth_Token", response);
    console.log(response);
    const user = await get("http://localhost:5000/api/auth/getuser");
    console.log(user);

    dispatch({ type: "SignIn", payload: user });
    return true;
  } else {
    return false
  }
};

export const SignOut = async (dispatch) => {
  localStorage.removeItem("Auth_Token");
  dispatch({ type: "SignOut" });
};
