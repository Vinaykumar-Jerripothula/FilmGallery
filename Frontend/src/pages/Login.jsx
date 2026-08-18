import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import LoadingScreen from "./Loading";
import {
  clearProgress,
  fetchProgress,
} from "../store/progressSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await axios.post(
        "https://filmgallery.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      if (response.data.message === "Login successful") {
        const userId = response.data.userId;

        // JWT Tokens
        localStorage.setItem(
          "accessToken",
          response.data.accessToken
        );

        localStorage.setItem(
          "refreshToken",
          response.data.refreshToken
        );

        // User Details
        localStorage.setItem("userId", userId);

        localStorage.setItem(
          "username",
          response.data.username
        );

        localStorage.setItem(
          "email",
          response.data.email
        );

        dispatch(clearProgress());
        dispatch(fetchProgress(userId));

        setTimeout(() => {
          navigate("/home");
        }, 1800);
      } else {
        setError(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);

      setError("Login failed");
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-4">
      <div className="w-full max-w-[300px] sm:max-w-[380px]">
        <div className="mb-5 text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            Film Gallery
          </h1>

          <p className="mt-1 text-xs sm:text-sm text-zinc-400">
            Welcome back to your watch tracker
          </p>
        </div>

        <div
          className="
            bg-[#111827]
            border
            border-zinc-800
            rounded-2xl
            shadow-xl
            p-3 sm:p-5
          "
        >
          <h2 className="text-lg sm:text-xl font-bold text-orange-400 mb-5">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="
                  w-full
                  px-3
                  py-2
                  rounded-lg
                  bg-[#0F172A]
                  border
                  border-zinc-700
                  text-sm
                  text-white
                  placeholder:text-zinc-500
                  focus:outline-none
                  focus:border-orange-500
                "
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="
                  w-full
                  px-3
                  py-2
                  rounded-lg
                  bg-[#0F172A]
                  border
                  border-zinc-700
                  text-sm
                  text-white
                  placeholder:text-zinc-500
                  focus:outline-none
                  focus:border-orange-500
                "
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-zinc-400">
                <input
                  type="checkbox"
                  className="accent-orange-500"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-orange-400 hover:text-orange-300"
              >
                Forgot?
              </button>
            </div>

            <button
              type="submit"
              className="
                w-full
                py-2
                rounded-lg
                font-semibold
                text-sm
                text-white
                bg-orange-500
                hover:bg-orange-600
                transition-all
              "
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-xs text-zinc-400">
              Don't have an account?{" "}
            </span>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-xs text-orange-400 hover:text-orange-300"
            >
              Create Account
            </button>
          </div>
        </div>

        <p className="text-center text-[11px] text-zinc-500 mt-4">
          Track movies, franchises, universes and TV series in one place.
        </p>
      </div>
    </div>
  );
}

export default Login;