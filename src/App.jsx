import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-dark-100 text-white min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
