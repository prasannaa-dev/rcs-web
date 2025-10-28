import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, ChevronDown, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [departmentsDropdown, setDepartmentsDropdown] = useState(false);
  const [citizenCornerDropdown, setCitizenCornerDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);
  const [informationDropdown, setInformationDropdown] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const [loginDropdown, setLoginDropdown] = useState(false);

  const content = {
    en: {
      marqueeText: 'Welcome to the Registrar of Cooperative Societies ',
      home: 'Home',
      about: 'About Us',
      departments: 'Departments',
      citizenCorner: 'Citizen Corner',
      gallery: 'Gallery',
      information: 'Information',
      contact: 'Contact Us',
      title: 'REGISTRAR OF COOPERATIVE SOCIETIES',
      email: 'Email:',
      emailAddress: 'xyz@gmail.com',

      phone: 'Phone:',
      phoneNumber: '+91-1234567890',
      language: 'Language',
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
      marqueeText: 'கூட்டுறவுச் சங்கங்களின் பதிவாளருக்கு வரவேற்கிறேன் ',
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      departments: 'துறைகள்',
      citizenCorner: 'குடிமக்கள் மூலை',
      gallery: 'காட்சியகம்',
      information: 'தகவல்',
      login:
        'உள்நுழைவு',
      contact: 'தொடர்பு கொள்ளவும்',
      title: 'கூட்டுறவுச் சங்கங்களின் பதிவாளர்',
      email: 'மின்னஞ்சல்:',
      emailAddress: 'xyz@gmail.com',
      phone: 'தொலைபேசி:',
      phoneNumber: '+91-1234567890',
      language: 'மொழி',

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
    const newLanguage = language === 'en' ?
      'ta' : 'en';
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

    closeAllDropdowns();
    switch (dropdownType) {
      case 'departments':
        setDepartmentsDropdown(true);
        break;
      case 'citizenCorner':
        setCitizenCornerDropdown(true);
        break;
      case 'gallery':
        setGalleryDropdown(true);
        break;
      case 'information':
        setInformationDropdown(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString(language === 'ta' ? 'ta-IN' : 'en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, [language]);
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
      {/* TOP LAYER - Blue Navigation Bar */}
      <div className="bg-[#006AA5] text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="w-full px-2 sm:px-4 lg:px-6 py-2">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Left Section - Desktop Navigation Menu */}
            <nav className="hidden lg:flex">

              <ul className="flex items-center space-x-2 xl:space-x-6 text-sm xl:text-base font-medium">
                {/* Home */}
                <li>
                  <Link
                    to="/"

                    className={`px-2 xl:px-4 py-2 xl:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${location.pathname === '/'
                        ? 'text-yellow-400 font-bold'
                        : 'hover:text-yellow-400 hover:font-semibold'

                      }`}
                  >
                    {t?.home ||
                      'HOME'}
                  </Link>
                </li>
                {/* About Us */}
                <li>
                  <Link
                    to="/about-us"
                    className="px-2 xl:px-4 py-2 xl:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:bg-opacity-15 hover:shadow-md"
                  >
                    {t?.about ||
                      'ABOUT'}
                  </Link>
                </li>


                {/* Institution (Departments) */}
                <li className="relative group">
                  <div
                    className="flex items-center px-2 xl:px-4 py-2 xl:py-3 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-15 hover:shadow-md transition-all duration-300 transform hover:scale-105"

                    onMouseEnter={() => setDepartmentsDropdown(true)}
                    onMouseLeave={() => setDepartmentsDropdown(false)}
                  >
                    <span className="whitespace-nowrap">{t?.departments ||
                      'INSTITUTION'}</span>
                    <ChevronDown size={14} className="ml-1 xl:ml-2 transition-transform duration-300" />
                  </div>
                  <div
                    className={`absolute top-full left-0 bg-white text-gray-800 shadow-2xl rounded-xl border-0 z-50 w-72 transition-all duration-300 transform ${departmentsDropdown ?
                        'opacity-100 visible translate-y-2 scale-100' : 'opacity-0 invisible translate-y-0 scale-95'
                      }`}
                    onMouseEnter={() => setDepartmentsDropdown(true)}
                    onMouseLeave={() => setDepartmentsDropdown(false)}
                  >

                    <div className="p-2">
                      <a href="https://www.rcs.tn.gov.in/credit_copperative.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.creditCooperatives ||
                        'Credit Cooperatives'}</a>
                      <a href="https://www.rcs.tn.gov.in/consumer_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.consumerCooperative ||
                        'Consumer Cooperative'}</a>
                      <a href="https://www.rcs.tn.gov.in/mpd_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.marketing ||
                        'Marketing'}</a>
                      <Link to="/planning-development" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.planningDevelopment ||
                        'Planning and Development'}</Link>
                      <a href="https://www.rcs.tn.gov.in/Icdp_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.icdp ||
                        'I.C.D.P'}</a>
                      <a href="https://www.rcs.tn.gov.in/cooperatives_elections.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 rounded-lg text-base">{t?.cooperativeElection ||
                        'Cooperative Election'}</a>
                    </div>
                  </div>
                </li>

                {/* Policy (Information) */}
                <li className="relative group">

                  <div
                    className="flex items-center px-2 xl:px-4 py-2 xl:py-3 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-15 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    onMouseEnter={() => setInformationDropdown(true)}
                    onMouseLeave={() => setInformationDropdown(false)}

                  >
                    <span className="whitespace-nowrap">{t?.information ||
                      'POLICY'}</span>
                    <ChevronDown size={14} className="ml-1 xl:ml-2 transition-transform duration-300" />
                  </div>
                  <div
                    className={`absolute top-full left-0 bg-white text-gray-800 shadow-2xl rounded-xl border-0 z-50 w-72 transition-all duration-300 transform ${informationDropdown ?
                        'opacity-100 visible translate-y-2 scale-100' : 'opacity-0 invisible translate-y-0 scale-95'
                      }`}
                    onMouseEnter={() => setInformationDropdown(true)}
                    onMouseLeave={() => setInformationDropdown(false)}
                  >

                    <div className="p-2 overflow-y-auto max-h-80">
                      <a href="https://www.rcs.tn.gov.in/Cooperative_guide.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.trainingNotes ||
                        'Training Notes'}</a>
                      <a href="https://www.rcs.tn.gov.in/latest_crc.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.gosRcsCirculars2 ||
                        'GOs and RCS Circulars'}</a>
                      <a href="https://www.rcs.tn.gov.in/actandrules.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.tncsActsRules ||
                        'TNCS Acts and Rules'}</a>
                      <a href="https://www.rcs.tn.gov.in/Common-Service-Centre.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.commonServiceCenters ||
                        'Service Centers'}</a>
                      <a href="https://www.rcs.tn.gov.in/policy_note.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.policyNotes ||
                        'Policy Notes'}</a>
                      <a href="https://www.rcs.tn.gov.in/cm.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.announcements ||
                        'Announcements'}</a>
                      <a href="https://www.rcs.tn.gov.in/RTI.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.rightToInformation ||
                        'RTI'}</a>
                      <a href="https://www.rcs.tn.gov.in/citizens-charter.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 rounded-lg text-base">{t?.citizenCharter ||
                        'Citizen Charter'}</a>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}

            <button
              className="lg:hidden mobile-toggle text-white focus:outline-none p-2 rounded-lg hover:bg-white hover:bg-opacity-15 transition-all duration-300 touch-manipulation"
              onClick={handleMobileMenuToggle}
              type="button"
              aria-label="Toggle menu"
            >

              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Right Section - Services, Schemes, Login + Language */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
              {/* Services (Gallery) */}
              <div className="relative group">

                <div
                  className="flex items-center px-2 xl:px-4 py-2 xl:py-3 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-15 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                  onMouseEnter={() => setGalleryDropdown(true)}
                  onMouseLeave={() => setGalleryDropdown(false)}
                >

                  <span className="text-sm xl:text-base whitespace-nowrap">{t?.gallery ||
                    'SERVICES'}</span>
                  <ChevronDown size={14} className="ml-1 xl:ml-2 transition-transform duration-300" />
                </div>
                <div
                  className={`absolute top-full right-0 bg-white text-gray-800 shadow-2xl rounded-xl border-0 z-50 w-48 transition-all duration-300 transform ${galleryDropdown ? 'opacity-100 visible translate-y-2 scale-100' : 'opacity-0 invisible translate-y-0 scale-95'
                    }`}
                  onMouseEnter={() => setGalleryDropdown(true)}
                  onMouseLeave={() => setGalleryDropdown(false)}
                >

                  <div className="p-2">
                    <a href="https://www.rcs.tn.gov.in/gallery.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.photoGallery ||
                      'Photo Gallery'}</a>
                    <a href="https://www.rcs.tn.gov.in/video_gallery.php" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 rounded-lg text-base">{t?.videoGallery ||
                      'Video Gallery'}</a>
                  </div>
                </div>
              </div>

              {/* Schemes (Citizen Corner) */}
              <div className="relative group">
                <div

                  className="flex items-center px-2 xl:px-4 py-2 xl:py-3 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-15 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                  onMouseEnter={() => setCitizenCornerDropdown(true)}
                  onMouseLeave={() => setCitizenCornerDropdown(false)}
                >

                  <span className="text-sm xl:text-base whitespace-nowrap">{t?.citizenCorner ||
                    'SCHEMES'}</span>
                  <ChevronDown size={14} className="ml-1 xl:ml-2 transition-transform duration-300" />
                </div>
                <div
                  className={`absolute top-full right-0 bg-white text-gray-800 shadow-2xl rounded-xl border-0 z-50 w-56 transition-all duration-300 transform ${citizenCornerDropdown ? 'opacity-100 visible translate-y-2 scale-100' : 'opacity-0 invisible translate-y-0 scale-95'
                    }`}
                  onMouseEnter={() => setCitizenCornerDropdown(true)}
                  onMouseLeave={() => setCitizenCornerDropdown(false)}
                >

                  <div className="p-2">
                    <a href="https://www.rcs.tn.gov.in/loan/" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border-b border-gray-100 transition-all duration-200 rounded-lg mb-1 text-base">{t?.onlineLoanApplication ||
                      'Online Loan Application'}</a>
                    <Link to="/coop-e-vadagai" className="block py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 rounded-lg text-base">{t?.coopEVadagai ||
                      'Co-op E-Vadagai'}</Link>
                  </div>
                </div>
              </div>

              {/* Login Dropdown */}
              <div className="relative">
                <div

                  className="flex items-center bg-gradient-to-r from-white to-gray-100 text-[#006AA5] px-3 xl:px-6 py-2 rounded-lg font-bold cursor-pointer hover:from-yellow-400 hover:to-yellow-500 hover:text-black transition-all duration-300 text-sm xl:text-base shadow-lg hover:shadow-xl transform hover:scale-105 ring-2 ring-white ring-opacity-20 whitespace-nowrap"
                  onClick={() => setLoginDropdown(!loginDropdown)}
                >
                  LOGIN

                  <ChevronDown size={14} className="ml-1 xl:ml-2" />
                </div>

                {loginDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-50">
                    <a
                      href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-t-lg text-base">
                      Test 1
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-b-lg text-base">

                      Test
                    </a>
                  </div>
                )}
              </div>

              {/* Language Toggle */}
              <div
                className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"

                      className="sr-only"
                      onChange={handleLanguageToggle}
                      checked={language === 'ta'}
                    />
                    <div

                      className="block w-12 xl:w-16 h-7 xl:h-9 rounded-full transition-all duration-300"
                      style={{
                        background: '#e5e7eb',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',

                      }}
                    ></div>
                    <div
                      className="absolute left-1 top-1 bg-white w-5 h-5 xl:w-7 xl:h-7 rounded-full transition-all duration-300 transform flex items-center justify-center text-xs xl:text-sm font-bold"

                      style={{
                        transform: language === 'ta' ?
                          'translateX(20px)' : 'translateX(0)',
                        backgroundColor: '#2563eb',
                        color: 'white',
                      }}
                    >

                      {language === 'ta' ?
                        'த' : 'En'}
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CENTER LOGO */}
      <div className="fixed left-1/2 transform -translate-x-1/2 top-2 z-50 hidden lg:block">
        <div className="bg-white rounded-full p-1">
          <img
            src="/Images/tn-logo.png"
            alt="Tamil Nadu Government Logo"
            className="h-16 xl:h-20 w-auto object-contain rounded-full"

          />
        </div>
      </div>

{/* BOTTOM LAYER - White Section with Title */}
<div className="relative flex justify-center mt-[56px] lg:mt-[62px] bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 overflow-hidden">
    {/* Decorative Background Pattern */}
    <div className="absolute inset-0 opacity-[0.07]">
        {/* Cooperative Icons Pattern */}
        <div className="absolute top-4 left-[5%] text-blue-400 text-6xl">🤝</div>
        <div className="absolute top-20 right-[8%] text-blue-400 text-5xl">⚖️</div>
        <div className="absolute bottom-8 left-[15%] text-blue-400 text-7xl">📋</div>
        <div className="absolute bottom-20 right-[12%] text-blue-400 text-6xl">🏛️</div>
        <div className="absolute top-1/2 left-[3%] text-blue-400 text-5xl">🤝</div>
        <div className="absolute top-1/3 right-[5%] text-blue-400 text-7xl">📋</div>
    </div>

    {/* Geometric Pattern Overlay */}
    <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="2" fill="#3b82f6"/>
                    <circle cx="0" cy="0" r="2" fill="#3b82f6"/>
                    <circle cx="60" cy="0" r="2" fill="#3b82f6"/>
                    <circle cx="0" cy="60" r="2" fill="#3b82f6"/>
                    <circle cx="60" cy="60" r="2" fill="#3b82f6"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>

    {/* Subtle Wave Effect */}
    <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#93c5fd"></path>
        </svg>
    </div>

    {/* Header content with logos and title */}
    <div className="relative flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-4 md:py-6 px-4">
        {/* Left Logo */}
        <div className="flex-shrink-0">
            <div className="relative group">
                <div className="rounded-full shadow-lg overflow-hidden ring-2 ring-white/60">
                    <img
                        src="/Images/cooplogo.png"
                        alt="Left Cooperative Logo"
                        className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>
        </div>

        {/* Center Title */}
        <div className="text-center flex-1 max-w-3xl relative">
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
                <h5 className="text-red-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight tracking-wide drop-shadow-md">
                    REGISTRAR OF COOPERATIVE SOCIETIES
                </h5>
                <h5 className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-tight tracking-wide drop-shadow-md mt-1">
                    கூட்டுறவுச் சங்கங்களின் பதிவாளர்
                </h5>
            </div>
        </div>

        {/* Right Logo - Placeholder for balance */}
        <div className="flex-shrink-0 opacity-0 pointer-events-none">
            <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"></div>
        </div>
    </div>
</div>
      {/* Mobile View */}

      <div className="lg:hidden bg-gradient-to-b from-white to-gray-50 py-4 sm:py-6 shadow-lg">
        <div className="px-4 text-center">
          <div className="relative inline-block mb-3 sm:mb-4">
            <img
              src="/Images/tn-logo.png"
              alt="Tamil Nadu Government Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mx-auto shadow-xl rounded-full ring-4 ring-blue-200 ring-opacity-50"

            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 opacity-20 rounded-full"></div>
          </div>
          {language === 'en' ?
            (
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-base sm:text-lg md:text-xl font-bold leading-tight tracking-wide drop-shadow-lg px-2">
                REGISTRAR OF COOPERATIVE SOCIETIES
              </h1>
            ) : (
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-base sm:text-lg md:text-xl font-bold leading-tight tracking-wide drop-shadow-lg px-2">

                கூட்டுறவுச் சங்கங்களின் பதிவாளர்
              </h1>
            )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[45]"

            onClick={() => setIsOpen(false)}
          ></div>

          <div className="mobile-menu-container lg:hidden fixed top-0 left-0 bg-white shadow-2xl z-50 w-full sm:w-80 h-screen overflow-y-auto transition-transform duration-300">
            {/* Mobile Menu Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">

              <h2 className="font-bold text-base sm:text-lg">Menu</h2>
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Language Toggle for Mobile */}
                <div className="flex items-center">
                  <span className="text-white text-xs sm:text-sm mr-2 font-medium hidden sm:inline">Language:</span>

                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"

                        onChange={handleLanguageToggle}
                        checked={language === 'ta'}
                      />
                      <div className={`block w-10 sm:w-12 h-5 sm:h-6 rounded-full shadow-inner 
transition-all duration-300 ${language === 'ta' ? 'bg-gradient-to-r from-green-400 to-green-500 shadow-lg' : 'bg-gradient-to-r from-gray-300 to-gray-400'}`}></div>
                      <div className={`absolute left-0.5 top-0.5 bg-white w-4 sm:w-5 h-4 sm:h-5 rounded-full shadow-lg transition-all duration-300 transform ${language === 'ta' ?
                        'translate-x-5 sm:translate-x-6 ring-2 ring-green-300' : 'ring-2 ring-gray-300'}`}></div>
                    </div>
                    <span className="ml-2 text-white text-xs sm:text-sm font-medium">{language === 'ta' ?
                      'த' : 'EN'}</span>
                  </label>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white touch-manipulation p-1 rounded-lg hover:bg-white hover:bg-opacity-15 transition-all duration-300"

                  type="button"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>

              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-0">
              <div className="border-b border-gray-100">
                <Link
                  to="/"

                  className={`block py-3 sm:py-4 px-4 sm:px-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 touch-manipulation font-medium text-sm sm:text-base ${location.pathname === '/' ?
                    'bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-600 text-blue-700' : 'text-gray-700'}`}
                  onClick={handleMenuItemClick}
                >
                  {t?.home ||
                    'HOME'}
                </Link>
              </div>

              <div className="border-b border-gray-100">
                <a href="https://www.rcs.tn.gov.in/aboutus.php"
                  target="_blank"
                  rel="noopener 
noreferrer"
                  className="block py-3 sm:py-4 px-4 sm:px-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 touch-manipulation font-medium text-gray-700 text-sm sm:text-base"
                  onClick={handleMenuItemClick}
                >
                  {t?.about ||
                    'ABOUT US'}
                </a>
              </div>

              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 cursor-pointer transition-all duration-300 touch-manipulation font-medium text-gray-700 text-sm sm:text-base"

                  onClick={(e) => handleDropdownClick('departments', e)}
                >
                  <span>{t?.departments ||
                    'INSTITUTION'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${departmentsDropdown ?
                    'rotate-180 text-blue-600' : 'text-gray-500'}`} />
                </div>
                <div className={`bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden transition-all duration-300 ${departmentsDropdown ?
                  'max-h-96' : 'max-h-0'}`}>
                  <a href="https://www.rcs.tn.gov.in/credit_copperative.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.creditCooperatives ||
                    'Credit Cooperatives'}</a>
                  <a href="https://www.rcs.tn.gov.in/consumer_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.consumerCooperative ||
                    'Consumer Cooperative'}</a>
                  <a href="https://www.rcs.tn.gov.in/mpd_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.marketing ||
                    'Marketing'}</a>
                  <Link to="/planning-development" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.planningDevelopment ||
                    'Planning and Development'}</Link>
                  <a href="https://www.rcs.tn.gov.in/Icdp_cooperative.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.icdp ||
                    'I.C.D.P'}</a>
                  <a href="https://www.rcs.tn.gov.in/cooperatives_elections.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.cooperativeElection ||
                    'Cooperative Election'}</a>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 cursor-pointer transition-all duration-300 touch-manipulation font-medium text-gray-700 text-sm sm:text-base"

                  onClick={(e) => handleDropdownClick('information', e)}
                >
                  <span>{t?.information ||
                    'POLICY'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${informationDropdown ?
                    'rotate-180 text-blue-600' : 'text-gray-500'}`} />
                </div>
                <div className={`bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden transition-all duration-300 max-h-80 overflow-y-auto ${informationDropdown ?
                  'max-h-80' : 'max-h-0'}`}>
                  <a href="https://www.rcs.tn.gov.in/Cooperative_guide.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.trainingNotes ||
                    'Training Notes'}</a>
                  <a href="https://www.rcs.tn.gov.in/latest_crc.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.gosRcsCirculars2 ||
                    'GOs and RCS Circulars'}</a>
                  <a href="https://www.rcs.tn.gov.in/actandrules.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.tncsActsRules ||
                    'TNCS Acts and Rules'}</a>
                  <a href="https://www.rcs.tn.gov.in/Common-Service-Centre.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.commonServiceCenters ||
                    'Service Centers'}</a>
                  <a href="https://www.rcs.tn.gov.in/policy_note.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.policyNotes ||
                    'Policy Notes'}</a>
                  <a href="https://www.rcs.tn.gov.in/cm.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.announcements ||
                    'Announcements'}</a>
                  <a href="https://www.rcs.tn.gov.in/RTI.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.rightToInformation ||
                    'RTI'}</a>
                  <a href="https://www.rcs.tn.gov.in/citizens-charter.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.citizenCharter ||
                    'Citizen Charter'}</a>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 cursor-pointer transition-all duration-300 touch-manipulation font-medium text-gray-700 text-sm sm:text-base"

                  onClick={(e) => handleDropdownClick('gallery', e)}
                >
                  <span>{t?.gallery ||
                    'SERVICES'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${galleryDropdown ?
                    'rotate-180 text-blue-600' : 'text-gray-500'}`} />
                </div>
                <div className={`bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden transition-all duration-300 ${galleryDropdown ?
                  'max-h-32' : 'max-h-0'}`}>
                  <a href="https://www.rcs.tn.gov.in/gallery.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.photoGallery ||
                    'Photo Gallery'}</a>
                  <a href="https://www.rcs.tn.gov.in/video_gallery.php" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.videoGallery ||
                    'Video Gallery'}</a>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 cursor-pointer transition-all duration-300 touch-manipulation font-medium text-gray-700 text-sm sm:text-base"

                  onClick={(e) => handleDropdownClick('citizenCorner', e)}
                >
                  <span>{t?.citizenCorner ||
                    'SCHEMES'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${citizenCornerDropdown ?
                    'rotate-180 text-blue-600' : 'text-gray-500'}`} />
                </div>
                <div className={`bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden transition-all duration-300 ${citizenCornerDropdown ?
                  'max-h-32' : 'max-h-0'}`}>
                  <a href="https://www.rcs.tn.gov.in/loan/" target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base border-b border-gray-200 touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.onlineLoanApplication ||
                    'Online Loan Application'}</a>
                  <Link to="/coop-e-vadagai" className="block py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 text-sm sm:text-base touch-manipulation transition-all duration-200 text-gray-600" onClick={handleMenuItemClick}>{t?.coopEVadagai ||
                    'Co-op E-Vadagai'}</Link>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <div className="p-3 sm:p-4">
                  <div

                    className="flex items-center justify-center bg-gradient-to-r from-white to-gray-100 text-[#006AA5] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold cursor-pointer hover:from-yellow-400 hover:to-yellow-500 hover:text-black transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105 ring-2 ring-blue-200 ring-opacity-50"
                    onClick={() => setLoginDropdown(!loginDropdown)}
                  >
                    LOGIN

                    <ChevronDown size={16} className="ml-2" />
                  </div>

                  {loginDropdown && (
                    <div className="mt-2 bg-white shadow-lg rounded-lg border">
                      <a href="#" className="block 
px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-t-lg text-base">
                        Test 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-b-lg text-base">

                        Test
                      </a>
                    </div>
                  )}
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