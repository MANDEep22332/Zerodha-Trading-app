import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../Signup.css";
    



const Signup = () => {
 
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodh-backend-adii.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
        const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
        window.location.href = "https://dashboard-ttcl.onrender.com";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container">
      <h2 className="mb-5 mt-5"> Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="emailDiv">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className="mb-5 form-control"
            required
          />
        </div>
        <div className="userDiv">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            className="mb-5 form-control"
            required
          />
        </div>
        <div className="passwordDiv">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className="mb-5 form-control"
            required
          />
        </div>
        <div className="ButtonDiv">
           <button type="submit" className="btn btn-success mb-5 mt-5">Submit</button>
        <span className="mb-5 ms-5">
          Already have an account? <Link className="link" to={"/login"}>Login</Link>
        </span>
        </div>
       
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;