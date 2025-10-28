import React from "react";
import { User, Shield, Briefcase, Handshake, DollarSign, Leaf, BookOpen } from "lucide-react"; 

// --- Enhanced AboutUs Component ---
const AboutUs = () => {
    // Sophisticated background with subtle gradients
    const backgroundStyle = {
        backgroundImage: `
            linear-gradient(135deg, #f8fafc 0%, #e1e9f0 100%),
            radial-gradient(circle at 20% 30%, rgba(0, 106, 165, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 106, 165, 0.03) 0%, transparent 50%)
        `,
        backgroundBlendMode: 'normal',
    };

    // Decorative pattern overlay
    const PatternOverlay = () => (
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #006AA5 0px, #006AA5 1px, transparent 1px, transparent 60px),
                                  repeating-linear-gradient(-45deg, #006AA5 0px, #006AA5 1px, transparent 1px, transparent 60px)`
            }}></div>
        </div>
    );

    // Floating decorative elements
    const FloatingElements = () => (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Shield className="w-32 h-32 text-[#006AA5] opacity-[0.04] absolute top-[8%] left-[3%] transform -rotate-12" />
            <Handshake className="w-28 h-28 text-[#006AA5] opacity-[0.04] absolute top-[25%] right-[5%] transform rotate-15" />
            <BookOpen className="w-36 h-36 text-[#006AA5] opacity-[0.04] absolute top-[55%] left-[8%] transform -rotate-6" />
            <Leaf className="w-24 h-24 text-[#006AA5] opacity-[0.04] absolute bottom-[15%] right-[12%] transform rotate-45" />
            <Briefcase className="w-28 h-28 text-[#006AA5] opacity-[0.04] absolute bottom-[35%] right-[4%] transform -rotate-12" />
            <DollarSign className="w-24 h-24 text-[#006AA5] opacity-[0.04] absolute top-[45%] right-[15%] transform rotate-30" />
        </div>
    );

    return (
        <div className="min-h-screen relative overflow-hidden" style={backgroundStyle}>
            
            {/* Decorative Elements */}
            <PatternOverlay />
            <FloatingElements />

            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#006AA5] to-transparent opacity-60"></div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 relative z-10">
                
                {/* Hero Section with gradient background */}
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent blur-3xl -z-10"></div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#006AA5] to-[#0088CC] mb-4 tracking-tight">
                        About Us
                    </h1>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#006AA5]"></div>
                        <div className="w-24 h-1.5 bg-[#006AA5] rounded-full"></div>
                        <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#006AA5]"></div>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        Pioneering Cooperative Excellence in Tamil Nadu
                    </p>
                </div>

                {/* Introduction Section with enhanced styling */}
                <div className="relative mb-16">
                    {/* Decorative corner elements */}
                    <div className="absolute -top-3 -left-3 w-24 h-24 border-l-4 border-t-4 border-[#006AA5] opacity-20 rounded-tl-2xl"></div>
                    <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-4 border-b-4 border-[#006AA5] opacity-20 rounded-br-2xl"></div>
                    
                    <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
                        {/* Gradient accent on the left */}
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#006AA5] via-[#0088CC] to-[#006AA5]"></div>
                        
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#006AA5] to-[#0088CC] rounded-xl flex items-center justify-center shadow-lg">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Introduction
                            </h2>
                        </div>

                        <div className="space-y-6 text-justify leading-loose text-lg text-gray-700 font-light">
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#006AA5] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                                Tamil Nadu has been a pioneer in India's cooperative movement, focusing on serving rural communities. <span className="font-medium text-gray-900">Cooperatives play a crucial role</span> in boosting agricultural productivity and farmers' incomes by providing timely crop loans, including interest-free loans for prompt repayment, as well as short-term, medium-term, long-term, jewel, and produce pledge loans. They also implement the Crop Insurance Scheme. Cooperatives manage the Public Distribution System through fair price shops and stabilize market prices under the Market Intervention Scheme (MIS) by procuring essential commodities like tur dal, urad dal, chillies, tamarind, gingelly oil, and onions at reasonable rates for sale at cooperative outlets. Additionally, they operate "Farm Fresh" consumer outlets for affordable vegetables and "Amma Marundhagam" pharmacies offering discounted quality medicines.
                            </p>

                            <div className="border-l-4 border-[#006AA5] pl-6 py-2 bg-gradient-to-r from-blue-50/50 to-transparent rounded-r-lg">
                                <p>
                                    For farmers, cooperatives run agri clinics, agro service centers, and supply fertilizers through TANFED at reasonable rates. To uplift tribal communities, Large Sized Multipurpose Cooperative Societies (LAMPS) market agricultural produce like samai, varagu, tamarind, and honey to ensure remunerative prices. The Integrated Cooperative Development Project, active in four districts, strengthens cooperatives with infrastructure, share capital, and margin money. Cooperative unions provide education to members, while Institutes of Cooperative Management train staff. Common Service Centres deliver public services, including issuing certificates, bill payments, and e-ticketing. Circle Deputy Registrars oversee cooperative elections, dispute resolution, inspections, statutory inquiries, surcharge cases, and arbitration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Leadership</h2>
                    <div className="flex justify-center">
                        <div className="w-24 h-1 bg-[#006AA5] rounded-full"></div>
                    </div>
                </div>

                {/* Profile Cards Section - Enhanced */}
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
                    {/* Card 1 */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#006AA5] to-[#0088CC] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                        <div className="relative bg-gradient-to-br from-[#006AA5] to-[#0088CC] rounded-3xl p-10 text-white text-center shadow-2xl transform transition duration-500 hover:scale-[1.03] hover:shadow-3xl overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full"></div>
                            
                            <div className="relative z-10">
                                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl ring-4 ring-white/20">
                                    <User className="w-14 h-14 text-[#006AA5]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Satyabrata Sahoo</h3>
                                <div className="inline-block bg-white/20 px-4 py-1 rounded-full mb-3">
                                    <p className="text-sm font-semibold">I.A.S</p>
                                </div>
                                <p className="text-base font-light">Principal Secretary to Government</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#006AA5] to-[#0088CC] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                        <div className="relative bg-gradient-to-br from-[#006AA5] to-[#0088CC] rounded-3xl p-10 text-white text-center shadow-2xl transform transition duration-500 hover:scale-[1.03] hover:shadow-3xl overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full"></div>
                            
                            <div className="relative z-10">
                                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl ring-4 ring-white/20">
                                    <User className="w-14 h-14 text-[#006AA5]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">K. Nanthakumar</h3>
                                <div className="inline-block bg-white/20 px-4 py-1 rounded-full mb-3">
                                    <p className="text-sm font-semibold">I.A.S</p>
                                </div>
                                <p className="text-base font-light">Registrar of Cooperative Societies</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Administrative Set Up Section 1 - Enhanced */}
                <div className="mb-16 relative">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        {/* Header with gradient */}
                        <div className="bg-gradient-to-r from-[#006AA5] to-[#0088CC] py-8 px-6 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <Briefcase className="w-64 h-64 absolute -right-20 -top-20 transform rotate-12" />
                            </div>
                            <h2 className="text-3xl font-bold text-white text-center relative z-10">
                                Administrative Set Up
                            </h2>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex flex-col items-center text-base text-gray-800 space-y-6">
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
                                        <div className="w-full max-w-xl group">
                                            <div className="relative bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl px-8 py-5 shadow-md hover:shadow-xl hover:border-[#006AA5] transition-all duration-300">
                                                {/* Position indicator */}
                                                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#006AA5] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                    {index + 1}
                                                </div>
                                                <p className="text-center font-medium pl-4">{title}</p>
                                            </div>
                                        </div>
                                        {index !== arr.length - 1 && (
                                            <div className="relative">
                                                <div className="text-[#006AA5] text-3xl leading-none">↓</div>
                                                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-[#006AA5] to-transparent -bottom-6"></div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Administrative Set Up Section 2 - Enhanced */}
                <div className="mb-12 relative">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        {/* Header with gradient */}
                        <div className="bg-gradient-to-r from-[#0088CC] to-[#006AA5] py-8 px-6 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <Handshake className="w-64 h-64 absolute -left-20 -top-20 transform -rotate-12" />
                            </div>
                            <h2 className="text-3xl font-bold text-white text-center relative z-10">
                                Administrative Set Up at Regional Level
                            </h2>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex flex-col items-center text-sm md:text-base text-gray-800">
                                {/* Top Level */}
                                <div className="relative flex flex-col items-center w-full">
                                    <div className="bg-gradient-to-r from-[#006AA5] to-[#0088CC] text-white font-semibold text-center px-8 py-4 rounded-xl shadow-lg mb-6 max-w-md">
                                        Administrative Set Up at Regional Level
                                    </div>

                                    {/* Arrow Down */}
                                    <div className="flex justify-center text-[#006AA5] text-2xl mb-6">
                                        <div className="flex flex-col items-center">
                                            <div>↓</div>
                                            <div className="w-0.5 h-8 bg-gradient-to-b from-[#006AA5] to-transparent"></div>
                                        </div>
                                    </div>

                                    {/* Second Level */}
                                    <div className="flex flex-col lg:flex-row justify-center items-start gap-16 mt-4 w-full max-w-6xl">
                                        {/* Left Branch */}
                                        <div className="flex flex-col items-center flex-1">
                                            <div className="bg-white border-2 border-[#006AA5] rounded-xl px-6 py-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <p className="font-semibold">Regional Additional Register (Chennai)</p>
                                                <p className="text-gray-600 mt-1">/ Regional Joint Registrars</p>
                                            </div>

                                            {/* Arrow */}
                                            <div className="flex justify-center text-[#006AA5] text-2xl my-4">
                                                <div className="flex flex-col items-center">
                                                    <div>↓</div>
                                                    <div className="w-0.5 h-6 bg-gradient-to-b from-[#006AA5] to-transparent"></div>
                                                </div>
                                            </div>

                                            {/* Third Level Left */}
                                            <div className="flex flex-col md:flex-row gap-6 mt-2">
                                                <div className="bg-gray-50 border-2 border-gray-300 rounded-xl px-5 py-3 shadow-md text-center hover:border-[#006AA5] transition-colors duration-300">
                                                    <p className="font-medium">Circle Deputy Registrars</p>
                                                </div>
                                                <div className="bg-gray-50 border-2 border-gray-300 rounded-xl px-5 py-3 shadow-md text-center hover:border-[#006AA5] transition-colors duration-300">
                                                    <p className="font-medium">Deputy Registrars</p>
                                                    <p className="text-gray-600 text-sm mt-1">(Public Distribution System)</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Branch */}
                                        <div className="flex flex-col items-center flex-1">
                                            <div className="bg-white border-2 border-[#006AA5] rounded-xl px-6 py-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <p className="font-semibold">Joint Registrar</p>
                                                <p className="text-gray-600 mt-1">(Public Distribution System) – Chennai</p>
                                            </div>

                                            {/* Arrow */}
                                            <div className="flex justify-center text-[#006AA5] text-2xl my-4">
                                                <div className="flex flex-col items-center">
                                                    <div>↓</div>
                                                    <div className="w-0.5 h-6 bg-gradient-to-b from-[#006AA5] to-transparent"></div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 border-2 border-gray-300 rounded-xl px-5 py-3 shadow-md text-center hover:border-[#006AA5] transition-colors duration-300 mt-2">
                                                <p className="font-medium">Deputy Registrar</p>
                                                <p className="text-gray-600 text-sm mt-1">(Public Distribution System) – Chennai</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative accent */}
                <div className="flex justify-center mt-16 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#006AA5] rounded-full"></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#006AA5] to-transparent"></div>
                        <div className="w-3 h-3 bg-[#006AA5] rounded-full"></div>
                        <div className="w-16 h-1 bg-gradient-to-l from-[#006AA5] to-transparent"></div>
                        <div className="w-3 h-3 bg-[#006AA5] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#006AA5] to-transparent opacity-60"></div>
        </div>
    );
};

export default AboutUs;