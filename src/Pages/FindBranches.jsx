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
          <div className="h-1 w-24 bg-[#006AA5]  mt-2"></div>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
<div className="lg:col-span-2">
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
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



          {/* Filter Section */}
          <div className="lg:col-span-1">
            <div className=" p-6 space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Salem">Salem</option>
                  <option value="Erode">Erode</option>
                  <option value="Tirupur">Tirupur</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Society Type
                </label>
                <select
                  value={societyType}
                  onChange={(e) => setSocietyType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="PCS">PCS</option>
                  <option value="PACS">PACS</option>
                  <option value="Urban Bank">Urban Bank</option>
                  <option value="Rural Bank">Rural Bank</option>
                </select>
              </div>

        <div className="flex justify-center">
  <button
    className="bg-[#006AA5] hover:bg-[#005885] text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
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
