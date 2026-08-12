import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      navigate("/home");
    }, 1800);
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
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Email
              </label>

              <input
                type="email"
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
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Password
              </label>

              <input
                type="password"
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
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs sm:text-sm text-zinc-300 mb-1.5">
                Confirm Password
              </label>

              <input
                type="password"
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
              />
            </div>

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
