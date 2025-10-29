import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, ChevronDown, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [departmentsDropdown, setDepartmentsDropdown] = useState(false);
  const [citizenCornerDropdown, setCitizenCornerDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);
  const [informationDropdown, setInformationDropdown] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  // Refs for dropdown menus
  const departmentsRef = useRef(null);
  const informationRef = useRef(null);
  const galleryRef = useRef(null);
  const citizenCornerRef = useRef(null);
  const loginRef = useRef(null);

  const content = {
    en: {
      home: 'Home',
      about: 'About Us',
      departments: 'Departments',
      citizenCorner: 'Citizen Corner',
      gallery: 'Gallery',
      information: 'Information',
      contact: 'Contact Us',
      title: 'REGISTRAR OF COOPERATIVE SOCIETIES',
      login: 'Login',

      // Department sub-items
      creditCooperatives: 'Credit Cooperatives',
      consumerCooperative: 'Consumer Cooperative',
      marketing: 'Marketing',
      planningDevelopment: 'Planning and Development of Co-operatives',
      icdp: 'Integrated Cooperative Development Project (I.C.D.P)',
      cooperativeElection: 'Cooperative Election',

      // Citizen Corner sub-items
      onlineLoanApplication: 'Online Loan Application',
      coopEVadagai: 'Co-op E-Vadagai',

      // Gallery sub-items
      photoGallery: 'Photo Gallery',
      videoGallery: 'Video Gallery',

      // Information sub-items
      gosRcsCirculars: 'GOs & RCS Circulars',
      trainingNotes: 'Training Notes for Assistants of Cooperative Societies',
      gosRcsCirculars2: 'GOs and RCS Circulars',
      tncsActsRules: 'TNCS Acts and Rules',
      commonServiceCenters: 'Common Service Centers',
      policyNotes: 'Policy Notes',
      announcements: 'Announcements',
      rightToInformation: 'Right to Information',
      citizenCharter: 'Citizen Charter'
    },
    ta: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      departments: 'துறைகள்',
      citizenCorner: 'குடிமக்கள் மூலை',
      gallery: 'காட்சியகம்',
      information: 'தகவல்',
      login: 'உள்நுழைவு',
      contact: 'தொடர்பு கொள்ளவும்',
      title: 'கூட்டுறவுச் சங்கங்களின் பதிவாளர்',

      // Department sub-items
      creditCooperatives: 'கடன் கூட்டுறவு நிறுவனங்கள்',
      consumerCooperative: 'நுகர்வோர் கூட்டுறவு நிறுவனம்',
      marketing: 'சந்தைப்படுத்தல்',
      planningDevelopment: 'கூட்டுறவு நிறுவனங்களின் திட்டமிடல் மற்றும் மேம்பாடு',
      icdp: 'ஒருங்கிணைந்த கூட்டுறவு மேம்பாட்டு திட்டம் (I.C.D.P)',
      cooperativeElection: 'கூட்டுறவு தேர்தல்',

      // Citizen Corner sub-items
      onlineLoanApplication: 'ஆன்லைன் கடன் விண்ணப்பம்',
      coopEVadagai: 'கூட்டுறவு மின்-வடகை',

      // Gallery sub-items
      photoGallery: 'புகைப்பட காட்சியகம்',
      videoGallery: 'வீடியோ காட்சியகம்',

      // Information sub-items
      gosRcsCirculars: 'அரசாணைகள் & RCS சுற்றறிக்கைகள்',
      trainingNotes: 'கூட்டுறவு நிறுவன உதவியாளர்களுக்கான பயிற்சி குறிப்புகள்',
      gosRcsCirculars2: 'அரசாணைகள் மற்றும் RCS சுற்றறிக்கைகள்',
      tncsActsRules: 'TNCS சட்டங்கள் மற்றும் விதிகள்',
      commonServiceCenters: 'பொதுவான சேவை மையங்கள்',
      policyNotes: 'கொள்கை குறிப்புகள்',
      announcements: 'அறிவிப்புகள்',
      rightToInformation: 'தகவல் அறியும் உரிமை',
      citizenCharter: 'குடிமக்கள் சாசனம்'
    }
  };

  const t = content[language];

  const handleLanguageToggle = () => {
    const newLanguage = language === 'en' ? 'ta' : 'en';
    localStorage.setItem('preferredLanguage', newLanguage);
    toggleLanguage();
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== language) {
      toggleLanguage();
    }
  }, []);

  const closeAllDropdowns = () => {
    setDepartmentsDropdown(false);
    setCitizenCornerDropdown(false);
    setGalleryDropdown(false);
    setInformationDropdown(false);
    setLoginDropdown(false);
  };

  const handleMobileMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllDropdowns();
    }
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
    closeAllDropdowns();
  };

  const handleDropdownClick = (dropdownType, e) => {
    e.preventDefault();
    e.stopPropagation();

    switch (dropdownType) {
      case 'departments':
        setDepartmentsDropdown(!departmentsDropdown);
        setCitizenCornerDropdown(false);
        setGalleryDropdown(false);
        setInformationDropdown(false);
        break;
      case 'citizenCorner':
        setCitizenCornerDropdown(!citizenCornerDropdown);
        setDepartmentsDropdown(false);
        setGalleryDropdown(false);
        setInformationDropdown(false);
        break;
      case 'gallery':
        setGalleryDropdown(!galleryDropdown);
        setDepartmentsDropdown(false);
        setCitizenCornerDropdown(false);
        setInformationDropdown(false);
        break;
      case 'information':
        setInformationDropdown(!informationDropdown);
        setDepartmentsDropdown(false);
        setCitizenCornerDropdown(false);
        setGalleryDropdown(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.querySelector('.mobile-menu-container');
      const mobileToggle = document.querySelector('.mobile-toggle');

      if (isOpen && mobileMenu && !mobileMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        setIsOpen(false);
        closeAllDropdowns();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    closeAllDropdowns();
  }, [location.pathname]);

  return (
    <header className="w-full top-0 left-0 z-50">
      {/* TOP NAVIGATION BAR - Blue */}
      <div className="bg-gradient-to-r from-[#005A8D] via-[#006AA5] to-[#005A8D] text-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="w-full px-4 lg:px-8 py-2">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden mobile-toggle text-white focus:outline-none p-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={handleMobileMenuToggle}
              type="button"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation Menu - All Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex items-center space-x-4 text-sm font-medium">
                {/* Home */}
                <li>
                  <Link
                    to="/"
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      location.pathname === '/'
                        ? 'bg-white bg-opacity-20 text-white font-semibold'
                        : 'hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    {t?.home || 'Home'}
                  </Link>
                </li>

                {/* About Us */}
                <li>
                  <Link
                    to="/about-us"
                    className="px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-200"
                  >
                    {t?.about || 'About Us'}
                  </Link>
                </li>

                {/* Departments Dropdown */}
                <li className="relative" ref={departmentsRef}>
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-200"
                    onMouseEnter={() => setDepartmentsDropdown(true)}
                    onMouseLeave={() => setDepartmentsDropdown(false)}
                  >
                    <span>{t?.departments || 'Departments'}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${departmentsDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Departments Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-xl rounded-md w-72 transition-all duration-200 ${
                      departmentsDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setDepartmentsDropdown(true)}
                    onMouseLeave={() => setDepartmentsDropdown(false)}
                  >
                    <div className="py-2">
                      <a href="https://www.rcs.tn.gov.in/credit_copperative.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.creditCooperatives || 'Credit Cooperatives'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/consumer_cooperative.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.consumerCooperative || 'Consumer Cooperative'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/mpd_cooperative.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.marketing || 'Marketing'}
                      </a>
                      <Link to="/planning-development" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.planningDevelopment || 'Planning and Development'}
                      </Link>
                      <a href="https://www.rcs.tn.gov.in/Icdp_cooperative.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.icdp || 'I.C.D.P'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/cooperatives_elections.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.cooperativeElection || 'Cooperative Election'}
                      </a>
                    </div>
                  </div>
                </li>

                {/* Information Dropdown */}
                <li className="relative" ref={informationRef}>
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-200"
                    onMouseEnter={() => setInformationDropdown(true)}
                    onMouseLeave={() => setInformationDropdown(false)}
                  >
                    <span>{t?.information || 'Information'}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${informationDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Information Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-xl rounded-md w-80 max-h-96 overflow-y-auto transition-all duration-200 ${
                      informationDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setInformationDropdown(true)}
                    onMouseLeave={() => setInformationDropdown(false)}
                  >
                    <div className="py-2">
                      <a href="https://www.rcs.tn.gov.in/Cooperative_guide.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.trainingNotes || 'Training Notes'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/latest_crc.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.gosRcsCirculars2 || 'GOs and RCS Circulars'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/actandrules.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.tncsActsRules || 'TNCS Acts and Rules'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/Common-Service-Centre.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.commonServiceCenters || 'Service Centers'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/policy_note.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.policyNotes || 'Policy Notes'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/cm.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.announcements || 'Announcements'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/RTI.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.rightToInformation || 'RTI'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/citizens-charter.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.citizenCharter || 'Citizen Charter'}
                      </a>
                    </div>
                  </div>
                </li>

                {/* Gallery Dropdown */}
                <li className="relative" ref={galleryRef}>
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-200"
                    onMouseEnter={() => setGalleryDropdown(true)}
                    onMouseLeave={() => setGalleryDropdown(false)}
                  >
                    <span>{t?.gallery || 'Gallery'}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${galleryDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute top-full right-0 mt-1 bg-white text-gray-800 shadow-xl rounded-md w-48 transition-all duration-200 ${
                      galleryDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setGalleryDropdown(true)}
                    onMouseLeave={() => setGalleryDropdown(false)}
                  >
                    <div className="py-2">
                      <a href="https://www.rcs.tn.gov.in/gallery.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.photoGallery || 'Photo Gallery'}
                      </a>
                      <a href="https://www.rcs.tn.gov.in/video_gallery.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.videoGallery || 'Video Gallery'}
                      </a>
                    </div>
                  </div>
                </li>

                {/* Citizen Corner Dropdown */}
                <li className="relative" ref={citizenCornerRef}>
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-200"
                    onMouseEnter={() => setCitizenCornerDropdown(true)}
                    onMouseLeave={() => setCitizenCornerDropdown(false)}
                  >
                    <span>{t?.citizenCorner || 'Citizen Corner'}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${citizenCornerDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute top-full right-0 mt-1 bg-white text-gray-800 shadow-xl rounded-md w-56 transition-all duration-200 ${
                      citizenCornerDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setCitizenCornerDropdown(true)}
                    onMouseLeave={() => setCitizenCornerDropdown(false)}
                  >
                    <div className="py-2">
                      <a href="https://www.rcs.tn.gov.in/loan/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.onlineLoanApplication || 'Online Loan Application'}
                      </a>
                      <Link to="/coop-e-vadagai" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        {t?.coopEVadagai || 'Co-op E-Vadagai'}
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Login Dropdown */}
                <li className="relative" ref={loginRef}>
                  <button
                    className="flex items-center gap-1 px-4 py-2 bg-white bg-opacity-15 rounded-md hover:bg-opacity-25 transition-all duration-200 font-medium"
                    onMouseEnter={() => setLoginDropdown(true)}
                    onMouseLeave={() => setLoginDropdown(false)}
                  >
                    <span>{t?.login || 'Login'}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${loginDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute top-full right-0 mt-1 bg-white text-gray-800 shadow-xl rounded-md w-40 transition-all duration-200 ${
                      loginDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setLoginDropdown(true)}
                    onMouseLeave={() => setLoginDropdown(false)}
                  >
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        eRCS
                      </a>
                      <a href="https://rcs-dms.onlinetn.com/login" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        DMS
                      </a>
                      <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        Dashboard
                      </a>
                      <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 text-sm transition-colors">
                        LIST
                      </a>
                    </div>
                  </div>
                </li>

                {/* Language Toggle */}
                <li className="ml-2">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        onChange={handleLanguageToggle}
                        checked={language === 'ta'}
                      />
                      <div className="block w-14 h-7 bg-white bg-opacity-20 rounded-full"></div>
                      <div
                        className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform duration-200 flex items-center justify-center text-xs font-bold text-blue-700"
                        style={{
                          transform: language === 'ta' ? 'translateX(28px)' : 'translateX(0)',
                        }}
                      >
                        {language === 'ta' ? 'த' : 'En'}
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </nav>

            {/* Placeholder for mobile - hidden on desktop */}
            <div className="hidden lg:block w-0"></div>
          </div>
        </div>
      </div>

      {/* HEADER SECTION WITH LOGOS AND TITLE */}
      <div className="mt-[52px] bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-center gap-6 lg:gap-8">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <img
              src="/Images/cooplogo.png"
              alt="Cooperative Logo"
              className="h-20 w-20 lg:h-24 lg:w-24 object-contain"
            />
          </div>

          {/* Title Section - Centered */}
          <div className="text-center">
            <h1 className="text-red-600 text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              REGISTRAR OF COOPERATIVE SOCIETIES
            </h1>
            <h2 className="text-gray-700 text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight mt-2">
              கூட்டுறவுச் சங்கங்களின் பதிவாளர்
            </h2>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0">
            <img
              src="/Images/tn-logo.png"
              alt="Tamil Nadu Logo"
              className="h-20 w-20 lg:h-24 lg:w-24 object-contain"
            />
          </div>
        </div>
      </div>


      {/* Mobile Navigation Menu */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="mobile-menu-container lg:hidden fixed top-0 left-0 bg-white shadow-2xl z-50 w-80 h-screen overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center sticky top-0 z-50">
              <h2 className="font-bold text-lg">Menu</h2>
              <div className="flex items-center gap-3">
                {/* Language Toggle */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      onChange={handleLanguageToggle}
                      checked={language === 'ta'}
                    />
                    <div className="block w-12 h-6 bg-white bg-opacity-30 rounded-full"></div>
                    <div
                      className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 flex items-center justify-center text-xs font-bold text-blue-700"
                      style={{
                        transform: language === 'ta' ? 'translateX(24px)' : 'translateX(0)',
                      }}
                    >
                      {language === 'ta' ? 'த' : 'En'}
                    </div>
                  </div>
                </label>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-1"
                  type="button"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-0">
              <Link
                to="/"
                className={`block py-3 px-4 border-b border-gray-100 ${
                  location.pathname === '/' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700'
                } hover:bg-gray-50`}
                onClick={handleMenuItemClick}
              >
                {t?.home || 'Home'}
              </Link>

              <Link
                to="/about-us"
                className="block py-3 px-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                onClick={handleMenuItemClick}
              >
                {t?.about || 'About Us'}
              </Link>

              {/* Departments Dropdown */}
              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => handleDropdownClick('departments', e)}
                >
                  <span>{t?.departments || 'Departments'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${departmentsDropdown ? 'rotate-180' : ''}`} />
                </div>
                <div className={`bg-gray-50 overflow-hidden transition-all duration-200 ${departmentsDropdown ? 'max-h-96' : 'max-h-0'}`}>
                  <a href="https://www.rcs.tn.gov.in/credit_copperative.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.creditCooperatives || 'Credit Cooperatives'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/consumer_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.consumerCooperative || 'Consumer Cooperative'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/mpd_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.marketing || 'Marketing'}
                  </a>
                  <Link to="/planning-development" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.planningDevelopment || 'Planning and Development'}
                  </Link>
                  <a href="https://www.rcs.tn.gov.in/Icdp_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.icdp || 'I.C.D.P'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/cooperatives_elections.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50" onClick={handleMenuItemClick}>
                    {t?.cooperativeElection || 'Cooperative Election'}
                  </a>
                </div>
              </div>

              {/* Information Dropdown */}
              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => handleDropdownClick('information', e)}
                >
                  <span>{t?.information || 'Information'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${informationDropdown ? 'rotate-180' : ''}`} />
                </div>
                <div className={`bg-gray-50 overflow-hidden overflow-y-auto transition-all duration-200 ${informationDropdown ? 'max-h-80' : 'max-h-0'}`}>
                  <a href="https://www.rcs.tn.gov.in/Cooperative_guide.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.trainingNotes || 'Training Notes'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/latest_crc.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.gosRcsCirculars2 || 'GOs and RCS Circulars'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/actandrules.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.tncsActsRules || 'TNCS Acts and Rules'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/Common-Service-Centre.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.commonServiceCenters || 'Service Centers'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/policy_note.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.policyNotes || 'Policy Notes'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/cm.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.announcements || 'Announcements'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/RTI.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.rightToInformation || 'RTI'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/citizens-charter.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50" onClick={handleMenuItemClick}>
                    {t?.citizenCharter || 'Citizen Charter'}
                  </a>
                </div>
              </div>

              {/* Gallery Dropdown */}
              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => handleDropdownClick('gallery', e)}
                >
                  <span>{t?.gallery || 'Gallery'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${galleryDropdown ? 'rotate-180' : ''}`} />
                </div>
                <div className={`bg-gray-50 overflow-hidden transition-all duration-200 ${galleryDropdown ? 'max-h-32' : 'max-h-0'}`}>
                  <a href="https://www.rcs.tn.gov.in/gallery.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.photoGallery || 'Photo Gallery'}
                  </a>
                  <a href="https://www.rcs.tn.gov.in/video_gallery.php" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50" onClick={handleMenuItemClick}>
                    {t?.videoGallery || 'Video Gallery'}
                  </a>
                </div>
              </div>

              {/* Citizen Corner Dropdown */}
              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => handleDropdownClick('citizenCorner', e)}
                >
                  <span>{t?.citizenCorner || 'Citizen Corner'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${citizenCornerDropdown ? 'rotate-180' : ''}`} />
                </div>
                <div className={`bg-gray-50 overflow-hidden transition-all duration-200 ${citizenCornerDropdown ? 'max-h-32' : 'max-h-0'}`}>
                  <a href="https://www.rcs.tn.gov.in/loan/" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    {t?.onlineLoanApplication || 'Online Loan Application'}
                  </a>
                  <Link to="/coop-e-vadagai" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50" onClick={handleMenuItemClick}>
                    {t?.coopEVadagai || 'Co-op E-Vadagai'}
                  </Link>
                </div>
              </div>

              {/* Login Dropdown */}
              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setLoginDropdown(!loginDropdown)}
                >
                  <span>{t?.login || 'Login'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${loginDropdown ? 'rotate-180' : ''}`} />
                </div>
                <div className={`bg-gray-50 overflow-hidden transition-all duration-200 ${loginDropdown ? 'max-h-48' : 'max-h-0'}`}>
                  <a href="#" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    eRCS
                  </a>
                  <a href="https://rcs-dms.onlinetn.com/login" target="_blank" rel="noopener noreferrer" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    DMS
                  </a>
                  <a href="#" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50 border-b border-gray-200" onClick={handleMenuItemClick}>
                    Dashboard
                  </a>
                  <a href="#" className="block py-2.5 px-8 text-sm text-gray-600 hover:bg-blue-50" onClick={handleMenuItemClick}>
                    LIST
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;