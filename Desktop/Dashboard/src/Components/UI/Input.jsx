import React, { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <div className="relative">
        <input
          {...register(name)}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`focus:outline-primary w-full text-sm p-3 rounded-lg border ${
            error ? "border-red-500" : "border-[#D9D9D9]"
          }`}
        />
        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
          >
            {showPassword ? (
              <MdVisibility className="h-5 w-5" />
            ) : (
              <MdVisibilityOff className="h-5 w-5" />
            )}
          </span>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
