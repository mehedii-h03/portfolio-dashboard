"use client";

import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";

type UserData = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    console.log(data);
  };

  return (
    <section className="flex justify-center items-center h-screen px-4 lg:px-0">
      <div className="w-[450px] shadow-sm p-5 sm:p-10 border-2 border-[hsl(0, 0%, 46%)] rounded-xl">
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-lg sm:text-2xl font-semibold">
            Welcome Back <span className="text-TPrimary">Mehedi!</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Make sure your profile is up to date.
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field-container relative flex items-center">
            <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
            <input
              type="text"
              className="input-field pl-12"
              placeholder="Your email goes here"
              {...register("email", { required: true })}
            />
            <label className="input-field-label">Email</label>
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="input-field-container relative flex items-center">
            <FiLock className="absolute left-4 text-xl font-bold" />
            <input
              type={showPassword ? "text" : "password"}
              className="input-field pl-12"
              placeholder="Your password goes here"
              {...register("password", { required: true })}
            />
            <label className="input-field-label">Password</label>
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
            {showPassword ? (
              <FaRegEye
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 text-xl font-bold cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 text-xl font-bold cursor-pointer"
              />
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-black w-full py-3 rounded-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
