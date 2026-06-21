import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10">
          <div className="flex justify-center mb-6">
            <Logo width="80px" />
          </div>

          <h2 className="text-2xl font-bold text-white text-center mb-1">
            Create an account
          </h2>
          <p className="text-sm text-zinc-500 text-center mb-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-950 border border-red-800 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(create)} className="space-y-6">
            <Input
              label="Full Name"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Please enter a valid email address",
                },
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true })}
            />
            <Button type="submit" variant="primary" className="w-full mt-2">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
