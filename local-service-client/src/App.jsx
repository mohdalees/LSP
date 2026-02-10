import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Providerdash from "./pages/Providerdash";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/providerdash" element={<Providerdash />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
  );
}
