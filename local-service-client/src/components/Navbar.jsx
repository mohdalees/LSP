import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 p-6 text-purple-100 flex justify-between ">
      <h1 className="text-2xl font-bold">LSP</h1>
      <div className="space-x-3 text-lg font-bold">
        <Link className="hover:text-teal-800 transition duration-300 ease-in-out" to="/">Home</Link>
        <Link className="hover:text-teal-800 transition duration-300 ease-in-out" to="/booking">Booking</Link>
        <Link className="hover:text-teal-800 transition duration-300 ease-in-out" to="/login">Login</Link>
        <Link className="hover:text-teal-800 transition duration-300 ease-in-out" to="/register">Register</Link>
      </div>
    </nav>
  );
}
