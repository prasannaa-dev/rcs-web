import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Search, MapPin } from "lucide-react";

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
    <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 py-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section - Matching Introduction Page Style */}
        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Find Our Branches
          </h2>
          <div className="w-16 h-0.5 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[90%] mx-auto">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden border border-indigo-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62214.02095742329!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695969870000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Filter Section - Matching card style */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-5 border border-indigo-300 space-y-4">
              <div>
                <label className="block text-gray-800 font-medium mb-2 text-base">
                  Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-2.5 border border-indigo-300 rounded-lg text-sm bg-white/60 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-400"
                >
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Salem">Salem</option>
                  <option value="Erode">Erode</option>
                  <option value="Tirupur">Tirupur</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2 text-base">
                  Society Type
                </label>
                <select
                  value={societyType}
                  onChange={(e) => setSocietyType(e.target.value)}
                  className="w-full px-4 py-2.5 border border-indigo-300 rounded-lg text-sm bg-white/60 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-400"
                >
                  <option value="PCS">PCS</option>
                  <option value="PACS">PACS</option>
                  <option value="Urban Bank">Urban Bank</option>
                  <option value="Rural Bank">Rural Bank</option>
                </select>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-7 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md"
                >
                  <Search className="w-4 h-4" />
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