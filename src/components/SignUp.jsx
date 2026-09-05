import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");

    try {
      const account = await authService.createAccount(data);

      if (account) {
        const user = await authService.getCurrentUser();

        if (user) {
          dispatch(login(user));
        }

        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl">
        <div className="px-8 py-8">
          <div className="flex justify-center mb-4">
            <Logo width="70px" />
          </div>

          <h2 className="text-4xl font-bold text-center text-white">
            Create Account
          </h2>

          <p className="text-center text-zinc-400 mt-2 mb-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              Sign In
            </Link>
          </p>

          {error && (
            <div className="mb-6 rounded-xl border border-red-700 bg-red-950 px-4 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit(create)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "0 30px",
              boxSizing: "border-box",
            }}
          >
            <Input
              label="Full Name"
              placeholder="John Doe"
              className="w-full"
              {...register("name", { required: true })}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              className="w-full"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Please enter a valid email",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              className="w-full"
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
