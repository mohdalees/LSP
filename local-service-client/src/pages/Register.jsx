import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [name, setName] = useState('');
  const [prof, setProf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [price, setPrice] = useState('');
  const handleregister = async (a) => {
    a.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role,
        prof,
        price,
      });
      console.log("Registration Success:", res.data);

      // Save token in localStorage and role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("prof", res.data.prof);
      localStorage.setItem("price", res.data.price);
      
      if (res.data.role === "provider") {
        navigate("/providerdash");
      }
      else {
        navigate('/');
      }

      alert("Registration Successful ✅");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Registration Failed ❌");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md" onSubmit={handleregister}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-3"
          value={name}
          onChange={(a) => setName(a.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(a) => setEmail(a.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(a) => setPassword(a.target.value)}
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
              value={prof}
              onChange={(a) => setProf(a.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Price per Hour (₹)"
              className="w-full border p-2 rounded mb-3"
              value={price}
              onChange={(a) => setPrice(a.target.value)}
              required
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
