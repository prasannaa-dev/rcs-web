import React from "react";
import { User, Briefcase } from "lucide-react"; 

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
                
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-3">
                        About Us
                    </h1>
                    <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Pioneering Cooperative Excellence in Tamil Nadu
                    </p>
                </div>

                {/* Introduction Section */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 md:p-12 rounded-xl shadow-md border border-amber-200">
                        
                        <div className="mb-6">
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Introduction
                            </h2>
                        </div>

                        <div className="space-y-5 text-justify leading-relaxed text-base text-gray-700">
                            <p>
                                Tamil Nadu has been a pioneer in India's cooperative movement, focusing on serving rural communities. Cooperatives play a crucial role in boosting agricultural productivity and farmers' incomes by providing timely crop loans, including interest-free loans for prompt repayment, as well as short-term, medium-term, long-term, jewel, and produce pledge loans. They also implement the Crop Insurance Scheme. Cooperatives manage the Public Distribution System through fair price shops and stabilize market prices under the Market Intervention Scheme (MIS) by procuring essential commodities like tur dal, urad dal, chillies, tamarind, gingelly oil, and onions at reasonable rates for sale at cooperative outlets. Additionally, they operate "Farm Fresh" consumer outlets for affordable vegetables and "Amma Marundhagam" pharmacies offering discounted quality medicines.
                            </p>

                            <p>
                                For farmers, cooperatives run agri clinics, agro service centers, and supply fertilizers through TANFED at reasonable rates. To uplift tribal communities, Large Sized Multipurpose Cooperative Societies (LAMPS) market agricultural produce like samai, varagu, tamarind, and honey to ensure remunerative prices. The Integrated Cooperative Development Project, active in four districts, strengthens cooperatives with infrastructure, share capital, and margin money. Cooperative unions provide education to members, while Institutes of Cooperative Management train staff. Common Service Centres deliver public services, including issuing certificates, bill payments, and e-ticketing. Circle Deputy Registrars oversee cooperative elections, dispute resolution, inspections, statutory inquiries, surcharge cases, and arbitration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Leadership Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-3">Our Leadership</h2>
                    <div className="w-20 h-0.5 bg-blue-600 mx-auto"></div>
                </div>

                {/* Profile Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {/* Card 1 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-md border border-indigo-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-5 flex items-center justify-center">
                            <User className="w-12 h-12 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Satyabrata Sahoo</h3>
                        <p className="text-sm text-blue-600 font-medium mb-2">I.A.S</p>
                        <p className="text-sm text-gray-600">Principal Secretary to Government</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-md border border-indigo-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-5 flex items-center justify-center">
                            <User className="w-12 h-12 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">K. Nanthakumar</h3>
                        <p className="text-sm text-blue-600 font-medium mb-2">I.A.S</p>
                        <p className="text-sm text-gray-600">Registrar of Cooperative Societies</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-md border border-indigo-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-5 flex items-center justify-center">
                            <User className="w-12 h-12 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Minister</h3>
                        <p className="text-sm text-blue-600 font-medium mb-2">I.A.S</p>
                        <p className="text-sm text-gray-600">Additional Secretary</p>
                    </div>
                </div>
                
                {/* Administrative Set Up Section */}
                <div className="mb-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-purple-200 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 px-6">
                            <h2 className="text-2xl font-semibold text-white text-center flex items-center justify-center gap-3">
                                <Briefcase className="w-6 h-6" />
                                Administrative Set Up
                            </h2>
                        </div>

                        <div className="p-8 md:p-12 bg-gradient-to-b from-purple-50 to-blue-50">
                            <div className="flex flex-col items-center space-y-4">
                                {[
                                    "Secretary to Government, Cooperation, Food and Consumer Protection Department",
                                    "Registrar of Cooperative Societies",
                                    "Joint Registrars",
                                    "Deputy Registrars",
                                    "Cooperative Sub-Registrars",
                                    "Senior Inspectors",
                                    "Junior Inspectors",
                                ].map((title, index, arr) => (
                                    <React.Fragment key={index}>
                                        <div className="w-full max-w-2xl">
                                            <div className="bg-white/70 border border-indigo-200 rounded-lg px-6 py-4 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300">
                                                <p className="text-center text-gray-700 font-medium">{title}</p>
                                            </div>
                                        </div>
                                        {index !== arr.length - 1 && (
                                            <div className="text-indigo-600 text-2xl">↓</div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;