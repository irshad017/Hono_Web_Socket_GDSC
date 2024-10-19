"use client";

import Dashboard from "@/components/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Home: React.FC = () => {
  return (
    <div className="container">
      <Dashboard />
      <ToastContainer /> 
    </div>
  );
};

export default Home;
