import React, { useState } from "react";
import { MdVisibilityOff } from "react-icons/md";
import { MdVisibility } from "react-icons/md";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] gap-5 py-16 bg-white p-8 shadow-md rounded-lg">
      <p className="text-sm flex gap-1">
        <span className="opacity-55"> Welcome back!</span>
        <span className="opacity-100">👋</span>
      </p>
      <h1 className="font-semibold text-3xl">Sign in to your account</h1>
      <form className="flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="username"
            className="text-sm opacity-70 font-semibold"
          >
            Your email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your email"
            className="bg-white border border-primary outline-none p-3 rounded-lg placeholder:text-sm text-sm  tracking-wide"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm opacity-70 font-semibold"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="bg-white border border-primary outline-none p-3 rounded-lg placeholder:text-sm text-sm w-full tracking-wide"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {showPassword ? (
                <MdVisibility className="h-5 w-5 text-gray-400" />
              ) : (
                <MdVisibilityOff className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary p-3 rounded-lg font-semibold mt-5 cursor-pointer"
        >
          <span className="text-white">Login</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
