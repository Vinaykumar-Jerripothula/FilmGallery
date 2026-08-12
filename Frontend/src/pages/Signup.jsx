import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      // Step 1: Create account
      const signupResponse = await axios.post(
        "https://filmgallery.onrender.com/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      console.log("Signup Response:", signupResponse.data);

      if (signupResponse.data !== "Signup successful") {
        setError(signupResponse.data);
        setLoading(false);
        return;
      }

      // Step 2: Automatically login after successful signup
      const loginResponse = await axios.post(
        "https://filmgallery.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login Response:", loginResponse.data);

      if (loginResponse.data.message === "Login successful") {
        // Step 3: Store logged-in user details
        localStorage.setItem(
          "userId",
          loginResponse.data.userId
        );

        localStorage.setItem(
          "username",
          loginResponse.data.username
        );

        localStorage.setItem(
          "email",
          loginResponse.data.email
        );

        // Step 4: Go directly to Home
        navigate("/home");
      } else {
        setError(
          loginResponse.data.message || "Automatic login failed"
        );
        setLoading(false);
      }
    } catch (error) {
      console.error("Signup Error:", error);

      if (error.response) {
        setError(
          typeof error.response.data === "string"
            ? error.response.data
            : "Signup failed"
        );
      } else {
        setError("Unable to connect to server");
      }

      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-4">
      <div className="w-full max-w-[300px] sm:max-w-[380px]">

        {/* Header */}
        <div className="mb-5 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Film Gallery
          </h1>

          <p className="mt-1 text-xs sm:text-sm text-zinc-400">
            Create your account and start tracking your watch progress
          </p>
        </div>

        {/* Signup Card */}
        <div
          className="
            bg-[#111827]
            border
            border-zinc-800
            rounded-2xl
            shadow-xl
            p-3 sm:p-4
          "
        >
          <h2 className="text-lg sm:text-xl font-bold text-orange-400 mb-5">
            Create Account
          </h2>

          <form onSubmit={handleSignup} className="space-y-2">

            {/* Username */}
            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Enter username"
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
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Enter email"
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
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Enter password"
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
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Confirm password"
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
                required
              />
            </div>

            {/* Success Message */}
            {success && (
              <p className="text-green-500 text-xs sm:text-sm text-center pt-1">
                {success}
              </p>
            )}

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-xs sm:text-sm text-center pt-1">
                {error}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                mt-2
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
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <span className="text-xs text-zinc-400">
              Already have an account?{" "}
            </span>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-xs text-orange-400 hover:text-orange-300"
            >
              Login
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-zinc-500 mt-4">
          Track movies, franchises, universes and TV series in one place.
        </p>

      </div>
    </div>
  );
}

export default Signup;