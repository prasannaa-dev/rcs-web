import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, ExternalLink } from "lucide-react";
import { API_ENDPOINTS } from "../services/apiconfig";

export default function FindBranches() {
  const [district, setDistrict] = useState("");
  const [societyType, setSocietyType] = useState("");
  const [districts, setDistricts] = useState([]);
  const [societyTypes, setSocietyTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    fetchDistricts();
    fetchSocietyTypes();
    initializeMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (locations.length > 0 && mapInstanceRef.current) {
      updateMapMarkers();
    }
  }, [locations]);

  const initializeMap = () => {
    if (typeof window !== 'undefined' && !mapInstanceRef.current) {
      // Load Leaflet CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => createMap();
        document.head.appendChild(script);
      } else {
        createMap();
      }
    }
  };

  const createMap = () => {
    if (mapRef.current && !mapInstanceRef.current && window.L) {
      const map = window.L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: true
      }).setView([11.0168, 76.9558], 11);
      
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map);

      mapInstanceRef.current = map;
    }
  };

  const updateMapMarkers = () => {
    if (!mapInstanceRef.current || !window.L || locations.length === 0) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    const validLocations = [];

    // Add new markers
    locations.forEach((location, index) => {
      const lat = parseFloat(location.latitude);
      const lng = parseFloat(location.longitude);

      // Validate coordinates
      if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        console.warn(`Invalid coordinates for location ${index}:`, location);
        return;
      }

      validLocations.push([lat, lng]);

      // Create custom icon with number
      const customIcon = window.L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: #dc2626; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">${index + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const marker = window.L.marker([lat, lng], { icon: customIcon })
        .addTo(mapInstanceRef.current);

      // Add popup
      marker.bindPopup(`
        <div style="min-width: 200px;">
          <strong style="font-size: 14px;">${location.society_name}</strong><br/>
          <span style="font-size: 12px; color: #666;">
            Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}<br/>
            Accuracy: ${location.accuracy}m
          </span>
        </div>
      `);

      markersRef.current.push(marker);
    });

    // Fit map to show all markers
    if (validLocations.length > 0) {
      try {
        if (validLocations.length === 1) {
          // If only one location, center on it with fixed zoom
          mapInstanceRef.current.setView(validLocations[0], 13);
        } else {
          // Multiple locations, fit bounds
          const bounds = window.L.latLngBounds(validLocations);
          mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] });
        }
      } catch (error) {
        console.error('Error fitting bounds:', error);
        // Fallback to first location
        if (validLocations.length > 0) {
          mapInstanceRef.current.setView(validLocations[0], 11);
        }
      }
    }
  };

  const fetchDistricts = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.DISTRICTS);
      const result = await response.json();
      if (result.status === "success") {
        setDistricts(result.data.data);
        if (result.data.data.length > 0) {
          setDistrict(result.data.data[0].id.toString());
        }
      }
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const fetchSocietyTypes = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.SOCIETY_TYPES);
      const result = await response.json();
      if (result.status === "success") {
        setSocietyTypes(result.data.data);
        if (result.data.data.length > 0) {
          setSocietyType(result.data.data[0].id.toString());
        }
      }
    } catch (error) {
      console.error("Error fetching society types:", error);
    }
  };

  const fetchLocations = async () => {
    if (!societyType || !district) {
      alert("Please select both Society Type and District");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINTS.SOCIETY_LOCATIONS}?society_type=${societyType}&district=${district}`
      );
      const result = await response.json();
      
      if (result.status === "success" && result.data.records.length > 0) {
        setLocations(result.data.records);
      } else {
        setLocations([]);
        alert("No locations found for the selected filters");
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
      alert("Error fetching locations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = (index) => {
    if (markersRef.current[index] && mapInstanceRef.current) {
      const marker = markersRef.current[index];
      const lat = parseFloat(locations[index].latitude);
      const lng = parseFloat(locations[index].longitude);
      
      mapInstanceRef.current.setView([lat, lng], 15);
      marker.openPopup();
    }
  };

  const openInGoogleMaps = (latitude, longitude, societyName) => {
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    
    if (isNaN(lat) || isNaN(lng)) {
      alert("Invalid coordinates");
      return;
    }

    // Open Google Maps with the coordinates
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-gray-100 py-8 mt-[140px] lg:mt-[152px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Find Our Branches
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg overflow-hidden border border-gray-300 relative z-0">
              <div 
                ref={mapRef} 
                style={{ height: '400px', width: '100%' }}
                className="relative z-0"
              ></div>
            </div>

            {locations.length > 0 && (
              <div className="mt-4 bg-white shadow-lg p-5 border border-gray-300 max-h-96 overflow-y-auto">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  Found {locations.length} Location{locations.length > 1 ? 's' : ''}
                </h3>
                <div className="space-y-2">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 border border-gray-300 hover:border-gray-500 transition-colors duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <span className="bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 text-sm">
                            {location.society_name}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Lat: {parseFloat(location.latitude).toFixed(4)}, 
                            Lng: {parseFloat(location.longitude).toFixed(4)}
                          </p>
                          <p className="text-xs text-gray-500">
                            Accuracy: {location.accuracy}m
                          </p>
                          <div className="mt-2 flex gap-2">
                            <button
                              onClick={() => handleLocationClick(index)}
                              className="text-xs bg-gray-700 hover:bg-gray-800 text-white px-3 py-1.5 rounded transition-colors duration-200 flex items-center gap-1"
                            >
                              <MapPin className="w-3 h-3" />
                              View on Map
                            </button>
                            <button
                              onClick={() => openInGoogleMaps(location.latitude, location.longitude, location.society_name)}
                              className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded transition-colors duration-200 flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Open in Google Maps
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg p-6 border border-gray-300 space-y-4">
              <div>
                <label className="block text-gray-800 font-semibold mb-2 text-base">
                  District
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 text-sm bg-white focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-200 hover:border-gray-400"
                  disabled={loading}
                >
                  <option value="">Select District</option>
                  {districts.map((dist) => (
                    <option key={dist.id} value={dist.id}>
                      {dist.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2 text-base">
                  Society Type
                </label>
                <select
                  value={societyType}
                  onChange={(e) => setSocietyType(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 text-sm bg-white focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-200 hover:border-gray-400"
                  disabled={loading}
                >
                  <option value="">Select Society Type</option>
                  {societyTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={fetchLocations}
                  disabled={loading || !district || !societyType}
                  className="bg-gray-800 hover:bg-black text-white font-semibold py-3 px-8 transition-colors duration-200 flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      LOADING...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      FILTER
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}