import './App.css';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/report" element={<Report />} />
    </Routes>


    </BrowserRouter>

    
  )
}

export default App
