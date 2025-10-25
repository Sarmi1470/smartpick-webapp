import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ScanLine } from "lucide-react"; // icons

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col items-center justify-center text-gray-800 p-6">
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-lg text-center">

        {/* Logo / Title */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-indigo-600 text-white p-4 rounded-full shadow-md">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-extrabold mt-4 text-indigo-700 tracking-tight">
            SmartPick
          </h1>
          <p className="mt-2 text-gray-600">
            Scan. Identify. Simplify your product lookup.
          </p>
        </div>

        {/* Main Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate("/scan")}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl shadow-md font-semibold text-lg transition-all duration-300"
          >
            <ScanLine className="w-6 h-6" />
            Scan a Product
          </button>

          <button
            onClick={() => alert('Feature coming soon!')}
            className="w-full flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-2xl shadow-sm font-semibold text-lg transition-all duration-300"
          >
            📚 View History
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-500">
          SmartPick | Built with ❤️ by Team 51
        </footer>
      </div>
    </div>
  );
}

export default Home;
