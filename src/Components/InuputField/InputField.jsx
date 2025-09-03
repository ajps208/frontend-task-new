import React, { forwardRef, useState } from "react";

const InputField = forwardRef(
  (
    {
      name,
      id,
      label,
      type = "text",
      value,
      onChange,
      error,
      isSignIn,
      autoFocus,
    },
    ref
  ) => {
    // state for password rules
    const [showPasswordRules, setShowPasswordRules] = useState(false);
    // state for toggle password
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative w-full mb-5">
        <input
          ref={ref}
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => type === "password" && setShowPasswordRules(true)}
          onBlur={() => type === "password" && setShowPasswordRules(false)}
          style={{ padding: "16px" }}
          className={`block w-full h-8 lg:h-11 text-xs text-gray-900 bg-transparent rounded-md border 
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
          className={`absolute text-xs duration-300 transform -translate-y-3 scale-75 top-1 left-3 z-10 origin-[0] px-1
          bg-white dark:bg-gray-900
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
          peer-focus:top-1 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-3
          text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500`}
        >
          {label}
        </label>

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
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
            style={{ padding: "16px", marginBottom: "12px" }}
            className="
               absolute z-20 bg-[#262626] text-white shadow-xl rounded-md w-[224px] 
               transition-all duration-300 
               bottom-full left-0
               lg:bottom-auto lg:-top-22 lg:-left-5 lg:-translate-x-full"
          >
            {/* Arrow */}
            <div className="absolute w-3 h-3 shadow-xl bg-[#262626] rotate-45 left-5 -bottom-1 lg:left-auto lg:-right-1 lg:top-22 lg:bottom-auto"></div>

            <ul className="text-xs font-normal">
              <li className="flex items-center gap-2 mb-1 before:content-['•'] before:text-white before:w-2 before:flex-shrink-0">
                Must be at least 8 characters
              </li>
              <li className="flex items-center gap-2 mb-1 before:content-['•'] before:text-white before:w-2 before:flex-shrink-0">
                Must contain at least 1 number
              </li>
              <li className="flex items-center gap-2 mb-1 before:content-['•'] before:text-white before:w-2 before:flex-shrink-0">
                Must contain at least 1 lowercase
              </li>
              <li className="flex items-center gap-2 mb-1 before:content-['•'] before:text-white before:w-2 before:flex-shrink-0">
                Must contain at least 1 uppercase
              </li>
              <li className="flex items-center gap-2 before:content-['•'] before:text-white before:w-2 before:flex-shrink-0">
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
