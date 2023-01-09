import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Register from "./pages/register/Register";

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/:email" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

