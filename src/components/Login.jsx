import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-xl shadow-black/20">
        <div className="mb-6 flex justify-center">
          <Logo width="80px" />
        </div>
        <h2 className="text-center text-2xl font-bold text-white leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-400">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-fuchsia-400 transition-colors duration-200 hover:text-fuchsia-300"
          >
            Sign Up
          </Link>
        </p>
        {error && (
          <div className="mt-6 rounded-2xl bg-red-950 border border-red-800 px-4 py-3 text-sm text-red-400 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit(login)} className="mt-8 space-y-6">
          <Input
            label="Email"
            placeholder="you@example.com"
            type="email"
            className="w-full"
            {...register("email", { required: true })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            className="w-full"
            {...register("password", { required: true })}
          />
          <Button type="submit" variant="primary" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
