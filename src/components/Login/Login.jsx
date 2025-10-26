import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card bg-base-100 w-full my-15 m-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-violet-800 text-white mt-4">Login</button>
          </fieldset>
        </form>
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
