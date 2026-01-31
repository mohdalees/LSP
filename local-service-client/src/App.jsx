import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Providerdash from "./pages/Providerdash";
import Register from "./pages/Register";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/provider-dashboard" element={<Providerdash />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
  );
}
