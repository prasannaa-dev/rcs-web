import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Search } from "lucide-react";

export default function FindBranches() {
  const [region, setRegion] = useState("Coimbatore");
  const [societyType, setSocietyType] = useState("PCS");

  const branches = [
    { id: 1, name: "Coimbatore Main Branch", lat: 11.0168, lng: 76.9558 },
    { id: 2, name: "Gandhipuram Branch", lat: 11.0165, lng: 76.9676 },
    { id: 3, name: "RS Puram Branch", lat: 11.0066, lng: 76.9547 },
    { id: 4, name: "Saibaba Colony Branch", lat: 11.023, lng: 76.9581 },
    { id: 5, name: "Peelamedu Branch", lat: 11.0309, lng: 77.0078 },
    { id: 6, name: "Vadavalli Branch", lat: 11.0244, lng: 76.8998 },
  ];

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 11.0168,
    lng: 76.9558,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Find Our Branches
          <div className="h-1 w-24 bg-[#006AA5]  mt-2"></div>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Note: The iframe is a placeholder for the actual GoogleMap component */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62214.02095742329!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695969870000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Filter Section - Increased Font Sizes */}
          <div className="lg:col-span-1">
            {/* Added bg-white, rounded-lg, and shadow-md for visual separation */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div>
                {/* Increased text-gray-700 to text-gray-800, and font-semibold to font-bold. Increased text size from default to text-lg */}
                <label className="block text-gray-800 font-bold mb-3 text-lg">
                  Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  // Increased padding and border styles for a larger look. Increased text size to text-base (or keep default for now, text-lg if you want it very large)
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow duration-200 shadow-sm hover:shadow-md"
                >
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Salem">Salem</option>
                  <option value="Erode">Erode</option>
                  <option value="Tirupur">Tirupur</option>
                </select>
              </div>

              <div>
                {/* Increased text-gray-700 to text-gray-800, and font-semibold to font-bold. Increased text size from default to text-lg */}
                <label className="block text-gray-800 font-bold mb-3 text-lg">
                  Society Type
                </label>
                <select
                  value={societyType}
                  onChange={(e) => setSocietyType(e.target.value)}
                  // Increased padding and border styles for a larger look. Increased text size to text-base (or keep default for now, text-lg if you want it very large)
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow duration-200 shadow-sm hover:shadow-md"
                >
                  <option value="PCS">PCS</option>
                  <option value="PACS">PACS</option>
                  <option value="Urban Bank">Urban Bank</option>
                  <option value="Rural Bank">Rural Bank</option>
                </select>
              </div>

              <div className="flex justify-center pt-2">
                {/* Increased py-2 to py-3 and px-6 to px-8. Increased text-sm to text-base */}
                <button
                  className="bg-[#006AA5] hover:bg-[#005885] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-base shadow-md hover:shadow-lg"
                >
                  <Search className="w-5 h-5" />
                  FILTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}