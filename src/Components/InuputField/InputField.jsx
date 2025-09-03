import React, { forwardRef, useState } from "react";

const InputField =forwardRef(({ name, id, label, type = "text", value, onChange, error, isSignIn, autoFocus }, ref) => {

  // state for password rules
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  // state for toggle password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full mb-6">
      <input
        ref={ref} 
        type={type === "password" && showPassword ? "text" : type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => type === "password" && setShowPasswordRules(true)}
        onBlur={() => type === "password" && setShowPasswordRules(false)}
        style={{ padding: "20px" }}
        className={`block w-full h-10 lg:h-14 text-sm text-gray-900 bg-transparent rounded-md border 
          appearance-none dark:text-white focus:outline-none focus:ring-0 peer
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500"
          }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 left-4 z-10 origin-[0] px-1
          bg-white dark:bg-gray-900
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
          peer-focus:top-2 peer-focus:left-4 peer-focus:scale-75 peer-focus:-translate-y-4
        text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
          `}
      >
        {label}
      </label>

      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {showPassword ? (
            <i className="fa-solid fa-eye-slash"></i>
          ) : (
            <i className="fa-solid fa-eye"></i>
          )}
        </button>
      )}

      {/* Password rules */}
      {type === "password" && showPasswordRules && !isSignIn && (
        <div
          style={{ padding: "20px", marginBottom: "15px" }}
          className="
               absolute z-20 bg-[#262626] text-white shadow-xl rounded-md w-[280px] 
                transition-all duration-300 
              bottom-full left-0
             lg:bottom-auto lg:-top-32 lg:-left-6 lg:-translate-x-full"
        >
          {/* Arrow */}
          <div className="absolute w-4 h-4 shadow-xl bg-[#262626] rotate-45 left-6 -bottom-2 lg:left-auto lg:-right-2 lg:top-28 lg:bottom-auto"></div>

          <ul className="text-sm font-normal">
            <li className="flex items-center gap-3 mb-1">
              Must be at least 8 characters
            </li>
            <li className="flex items-center gap-3 mb-1">
              Must contain at least 1 number
            </li>
            <li className="flex items-center gap-3 mb-1">
              Must contain at least 1 lowercase
            </li>
            <li className="flex items-center gap-3 mb-1">
              Must contain at least 1 uppercase
            </li>
            <li className="flex items-center gap-3">
              Must contain at least 1 special character
            </li>
          </ul>
        </div>
      )}
    </div>
    );
  }
);

export default InputField;
