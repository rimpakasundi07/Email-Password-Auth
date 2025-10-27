import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("please verify your Email Address");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full my-15 m-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-violet-800 text-white mt-4">Login</button>
          </fieldset>
        </form>
        {error && <p className="text-red-500"> {error} </p>}
        <p className="py-2">
          New to our Website ? Please{" "}
          <Link to="/register">
            <span className="text-blue-600 underline">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
