import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("Register click", email, password);

    // reset status : success or error
    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("after creation of a new user", result.user);
        setSuccess(true);
        event.target.reset();
      })
      .catch((error) => {
        console.log("error happened", error.message);
        setError(error.message);
      });
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <main className="w-full flex justify-center items-center">
      <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8  w-[600px] my-10  max-w-2xl mx-4">
        <h1 className="text-2xl lg:text-4xl font-bold mb-1 text-gray-800">
          Registration
        </h1>

        <form onSubmit={handleRegister} className="space-y-5 w-full ">
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@example.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minlength="6"
                placeholder="Minimum 6 characters"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button
                onClick={handleTogglePasswordShow}
                className="btn btn-xs  absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                type="button"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm ">
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              id="registerBtn"
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none disabled:opacity-60"
            >
              Register
            </button>
          </div>
          {success && (
            <p className="text-green-500">Account created successfully</p>
          )}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Register;
