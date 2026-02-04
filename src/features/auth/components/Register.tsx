import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    PhoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your registration logic here
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-gradient-to-br from-gray-900 to-black">
      {/* Header with ET | EthioDisapora */}
      <div className="text-center mb-8">
        <Link to="/" className="block mb-6">
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

        <h2 className="text-3xl font-bold text-white mb-3">Create Account</h2>
        <p className="text-gray-400">Join our global community</p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
           FullName
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-3.5 text-gray-500"
                size={20}
              />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Write your fullname"
                className="w-full bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              P.Number
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-3.5 text-gray-500"
                size={20}
              />
              <input
                type="number"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                placeholder="Write your phone number"
                className="w-full bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
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
                placeholder="Write your email"
                className="w-full bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-3.5 text-gray-500"
                size={20}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Choose Role */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Choose Role
            </label>
            <div className="relative">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all appearance-none"
                required
              >
                <option value="" disabled className="text-gray-500">
                  Choose Role
                </option>
                <option value="member" className="text-white bg-[#1A1A1A]">
                  BussinessOwner
                </option>
                <option value="contributor" className="text-white bg-[#1A1A1A]">
                  Investor
                </option>
                <option value="ambassador" className="text-white bg-[#1A1A1A]">
                  Admin
                </option>
              </select>
              <div className="absolute right-3 top-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-6"></div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#FFD700] to-yellow-500 hover:from-yellow-500 hover:to-[#FFD700] text-black font-bold py-3.5 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            Register
          </button>

          {/* Already Registered */}
          <div className="text-center pt-4">
            <p className="text-gray-400 text-sm">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-[#FFD700] hover:text-yellow-400 font-semibold transition-colors"
              >
                Login To account
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Terms & Conditions */}
      <p className="text-center text-gray-500 text-sm mt-8 max-w-md">
        By registering, you agree to our Terms & Conditions and Privacy Policy
      </p>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
