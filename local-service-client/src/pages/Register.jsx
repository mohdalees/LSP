import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-3"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-2 rounded mb-3"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
        />

        {/* Role Selection */}
        <div className="flex gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={() => setRole("user")}
            />
            User
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="provider"
              checked={role === "provider"}
              onChange={() => setRole("provider")}
            />
            Service Provider
          </label>
        </div>

        {/* Provider Extra Fields */}
        {role === "provider" && (
          <>
            <input
              type="text"
              placeholder="Service Type (Plumber, Electrician...)"
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="number"
              placeholder="Price per Hour (₹)"
              className="w-full border p-2 rounded mb-3"
            />
          </>
        )}

        {/* Button */}
        <button className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-teal-800 transition duration-300 ease-in-out">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer">
            <Link to="/login" className="hover:text-teal-800 transition duration-300 ease-in-out">login</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
