import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
    } else {
      toast.success("Login successful!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center h-full bg-transparent px-4  ">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="relative bg-[#1c2d46] dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 text-white"
        >
          {/* Company Logo/Branding */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-28 h-20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  <Link to="/">
                    <img
                      src="/images/logo1.png"
                      alt="Company Logo"
                      className="h-full w-full object-contain"
                    />
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Sign in to your account
            </p>
          </div>

          {/* Email input */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 transition duration-300"
              />
            </div>
          </div>

          {/* Password input */}
          <div className="mb-8">
            <label className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 transition duration-300"
              />
            </div>
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-white"
              >
                Remember me
              </label>
            </div>

            <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm"
          >
            Sign In
          </button>

          {/* Sign up link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-300">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-400 hover:text-blue-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
