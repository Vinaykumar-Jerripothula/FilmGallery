import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./Loading";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      navigate("/home");
    }, 1800);

  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-4">
      <div className="w-full max-w-[300px] sm:max-w-[380px]">

        {/* Header */}
        <div className="mb-5 text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            Film Gallery
          </h1>

          <p className="mt-1 text-xs sm:text-sm text-zinc-400">
            Welcome back to your watch tracker
          </p>
        </div>

        {/* Login Card */}
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

            {/* Remember Me */}
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

            {/* Login Button */}
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

          {/* Signup Link */}
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

        {/* Footer */}
        <p className="text-center text-[11px] text-zinc-500 mt-4">
          Track movies, franchises, universes and TV series in one place.
        </p>

      </div>
    </div>
  );
}

export default Login;