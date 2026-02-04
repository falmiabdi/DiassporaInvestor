import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
// import { useAppDispatch } from "../../../hooks/hooks";
import { loginUser } from "../slice/authSlice";

export default function Login() {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const { loading, error } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // setIsLoading(true);
    // const response = await dispatch(loginUser(formData));

    // if (response.meta.requestStatus === "fulfilled") {
    //   navigate("/dashboard");
    // }
    // setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-gradient-to-br from-gray-900 to-black">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-md z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-[#FFD700] text-[#1A1A1A] font-bold text-3xl px-4 py-2 rounded-lg shadow-lg">
                ET
              </div>
              <div className="h-8 w-[1px] bg-[#FFD700]/50"></div>
              <div className="text-[#FFD700] text-2xl font-bold tracking-wide">
                EthioDiaspora
              </div>
            </div>
          </Link>
          <p className="text-gray-400 text-sm">
            Welcome back to your dashboard
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Login to Account
          </h2>

          {/* Error Message (Uncomment when using) */}
          {/* {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-700 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )} */}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 text-gray-500"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3.5 text-gray-500"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  className="text-sm relative left-70  text-[#FFD700] hover:text-yellow-400 transition-colors"
                >
                  Forgot Password?
                </button>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-300 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFD700] to-yellow-500 hover:from-yellow-500 hover:to-[#FFD700] text-black font-bold py-3.5 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg mt-4"
              // disabled={isLoading}
            >
              {/* {isLoading ? "Logging in..." : "Login to Account"} */}
              Login to Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[#0F0F0F] text-gray-500 text-sm">
                Don't have an account?
              </span>
            </div>
          </div>

          {/* Register Link */}
          <Link to="/register">
            <button className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white border border-gray-800 font-medium py-3.5 rounded-lg transition-colors">
              Create New Account
            </button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          By logging in, you agree to our Terms & Conditions
        </p>
      </div>
    </div>
  );
}
