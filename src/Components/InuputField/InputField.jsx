import React, { useState } from "react";

const InputField = ({ id, label, type = "text", value, onChange, error,isSignIn }) => {
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Password validation rules
  const rules = {
    length: value?.length >= 8,
    number: /\d/.test(value),
    uppercase: /[A-Z]/.test(value),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
  };

  const passwordRules = [
    "Must be atleast 8 characters",
    "Must contain atleast 1 number",
    "Must contain atleast 1 lowercase",
    "Must contain atleast 1 uppercase",
    "Must contain atleast 1 special character -~!@#$%^&*+=|<>?./ ",
  ];

  return (
    <div className="relative w-full mb-6">
      <input
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => type === "password" && setShowPasswordRules(true)}
        onBlur={() => type === "password" && setShowPasswordRules(false)}
        style={{ padding: "20px" }}
        className={`block w-full h-10 lg:h-14  text-sm text-gray-900 bg-transparent rounded-md border 
        appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 dark:focus:border-blue-500 focus:border-blue-600"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 left-4 z-10 origin-[0] bg-white dark:bg-gray-900 px-1
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
        peer-focus:top-2 peer-focus:left-4 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
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
            <i class="fa-solid fa-eye-slash"></i>
          ) : (
            <i class="fa-solid fa-eye"></i>
          )}
        </button>
      )}

      {/* Password rules tooltip */}
      {/* Password rules tooltip */}
      {type === "password" && showPasswordRules && !isSignIn && (
        <div
          style={{ padding: "20px", marginBottom: "15px" }}
          className={`absolute z-20 bg-[#171717] text-white shadow-xl rounded-md w-[280px] transition-all duration-300  bottom-full   `}
        >
          <div
            className={`absolute w-4 h-4 bg-[#171717] rotate-45 left-6 -bottom-2 `}
          ></div>

          <ul className="text-sm font-normal">
            {passwordRules.map((rule, index) => (
              <li
                key={index}
                className="flex items-center gap-3"
                style={{ marginBottom: "5px" }}
              >
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputField;
