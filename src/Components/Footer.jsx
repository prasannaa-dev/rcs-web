import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#006AA5] text-white">
      {/* Top Logo and Header */}
  <div className="flex justify-center">
    <div className="w-2/4 bg-white rounded-b-2xl shadow-md py-6 flex items-center justify-center space-x-6">
        {/* Left Logo - Increased size */}
        <img
            src="/Images/cooplogo.png"
            alt="Tamil Nadu Logo"
            className="h-20 w-20 object-contain rounded-full"
        />
        {/* Title - Increased font size */}
        <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-red-500 uppercase">
                Registrar of Cooperative Societies
            </h1>
            {/* Subtitle - Increased font size */}
            <p className="text-base text-black">
                கூட்டுறவு சங்கங்களின் பதிவாளர்
            </p>
        </div>
        {/* Right Logo - Increased size */}
        <img
            src="/Images/images.png"
            alt="Right Logo"
            className="h-20 w-20 object-contain rounded-full"
        />
    </div>
</div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 px-8 text-center">
        {/* Left - Navigation (center horizontally) */}
   {/* Left - Navigation */}
<div className="flex flex-col space-y-3 text-left mx-auto">
  <p className="cursor-pointer hover:underline">Home</p>
  <p className="cursor-pointer hover:underline">About Us</p>
  <p className="cursor-pointer hover:underline">Departments</p>
  <p className="cursor-pointer hover:underline">Institutions</p>
  <p className="cursor-pointer hover:underline">Citizen Corner</p>
  <p className="cursor-pointer hover:underline">Gallery</p>
  <p className="cursor-pointer hover:underline">Information</p>
  <p className="cursor-pointer hover:underline">Contact Info</p>
</div>


        {/* Center - Map */}
        <div className="flex flex-col items-center">
          <h2 className="font-semibold mb-3">Location</h2>
          <iframe
            title="Location"
            src="https://www.google.com/maps?q=chennai&output=embed"
            className="w-full h-64 rounded-md"
          ></iframe>
        </div>

        {/* Right - Social Media (center horizontally) */}
    {/* Right - Social Media */}
<div className="flex flex-col space-y-3 mx-auto">
  <h2 className="font-semibold mb-3 text-center">Social Media</h2>
  <a href="#" className="flex items-center space-x-2 hover:underline text-left">
    <Twitter size={18} /> <span>X</span>
  </a>
  <a href="#" className="flex items-center space-x-2 hover:underline text-left">
    <Instagram size={18} /> <span>Instagram</span>
  </a>
  <a href="#" className="flex items-center space-x-2 hover:underline text-left">
    <Youtube size={18} /> <span>YouTube</span>
  </a>
  <a href="#" className="flex items-center space-x-2 hover:underline text-left">
    <Facebook size={18} /> <span>Facebook</span>
  </a>
</div>


      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-4">
        <p className="text-sm">
          Copyright © 2024, All Right Reserved REGISTRAR OF COOPERATIVE SOCIETIES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
