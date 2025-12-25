import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { baseURL } from "../utils/constents";

const Login = () => {
  const [email, setEmail] = useState("asif@gmail.com");
  const [password, setPassword] = useState("Asif@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${baseURL}/login`,
        {
          emailId: email,
          password,
        },
        { withCredentials: true } //this sets token in cookie
      );
      dispatch(addUser(result.data));
      navigation("/");
    } catch (error) {
      setError(error?.response?.data || " something went wrong");
      console.error("Login error:", error);
    }
  };

  const handleSignup = async ()=>{
    try {
      const result = await axios.post(
        `${baseURL}/signup`,
        {
          emailId: email,
          password,
          firstName,
          lastName
        },
        { withCredentials: true } 
      );
      dispatch(addUser(result.data));
      navigation("/profile");
    } catch (error) {
      setError(error?.response?.data || " something went wrong");
      console.error("Signup error:", error);
    }
  }
  return (
    <div className="card w-96 bg-base-300 card-lg shadow-m m-5 mx-auto flex flex-col items-center bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title justify-center font-bold">
          {isLoginForm ? "Login" : "SignUp"}
        </h2>
        <div>
          {!isLoginForm && (
            <>
              <input
                type="text"
                placeholder="FirstName"
                value={firstName}
                className="input input-bordered w-full max-w-xs my-2 !text-black placeholder:text-black"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="text"
                placeholder="LastName"
                value={lastName}
                className="input input-bordered w-full max-w-xs my-2 !text-black placeholder:text-black"
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="input input-bordered w-full max-w-xs my-2 !text-black placeholder:text-black"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            className="input input-bordered w-full max-w-xs my-2 !text-black placeholder:text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-red-500">{error}</p>
        <div className="justify-end card-actions">
          <button className="btn !text-black " onClick={isLoginForm? handleLogin : handleSignup}>
            {isLoginForm ? "Login" : "SignUp"}
          </button>
        </div>
        <p className="justify-center margin-auto cursor-pointer py-2"onClick={() => setIsLoginForm((value) => !value)}>
          {isLoginForm ? "New User? Signup Here" : "Existing User? Login Here"}
        </p>
      </div>
    </div>
  );
};

export default Login;
