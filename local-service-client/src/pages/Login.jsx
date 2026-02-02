import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlelogin = async (a) => {
    a.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
        role,
      });
      console.log("Login Success:", res.data);

      // Save token in localStorage and role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "provider") {
        navigate("/providerdash");
      }
      else {
        navigate('/');
      }

      alert("Login Successful ✅");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login Failed ❌");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="border p-6 rounded w-80" onSubmit={handlelogin}>
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <select onChange={(a) => setRole(a.target.value)}>
          <option value="user">User</option>
          <option value="provider">Service Provider</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(a) => setEmail(a.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          value={password}
          onChange={(a) => setPassword(a.target.value)}
          required
        />

        <button className="bg-blue-600 text-white w-full py-2">
          Login
        </button>
      </form>
    </div>
  );
}
