import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";
import { CheckCircle, ArrowLeft, QrCode } from "lucide-react";

function Scan() {
  const [data, setData] = useState("");
  const [scanned, setScanned] = useState(false);
  const navigate = useNavigate();

  // Use react-zxing for scanning
  const { ref } = useZxing({
    onDecodeResult(result) {
      const code = result.getText();
      setData(code);
      setScanned(true);

      // Play scan sound
      const audio = new Audio("/beep.mp3");
      audio.play();

      // Optional alert or toast
      console.log(`Scanned: ${code}`);
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 text-gray-800 p-6">
      {/* Header */}
      <div className="flex items-center w-full max-w-md mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-gray-800 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-2 text-center flex items-center gap-2">
        <QrCode className="w-7 h-7 text-blue-700" />
        Scan Product
      </h1>
      <p className="text-gray-500 mb-6 text-center">
        Align the product barcode or QR within the frame below.
      </p>

      {/* Scanner Frame */}
      <div className="relative w-80 h-80 border-4 border-blue-600 rounded-2xl overflow-hidden shadow-lg bg-black">
        <video
          ref={ref}
          className="w-full h-full object-cover rounded-2xl"
          autoPlay
          muted
        />
        {/* Scanning animation line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan" />
      </div>

      {/* Scan Result */}
      <div className="mt-6 text-center">
        {scanned ? (
          <div className="flex flex-col items-center text-green-600 font-semibold text-lg">
            <CheckCircle className="w-6 h-6 mb-1" />
            <p>Scanned Successfully!</p>
            <p className="text-gray-700 mt-2 text-sm break-all">{data}</p>
          </div>
        ) : (
          <p className="text-gray-500 italic">Waiting for scan...</p>
        )}
      </div>

      {/* Styles for animation */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(320px); }
        }
        .animate-scan {
          animation: scan 1.5s linear infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default Scan;
