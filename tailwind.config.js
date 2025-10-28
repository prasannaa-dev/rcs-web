/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to all your components
  ],
  theme: {
    extend: {
      fontFamily: {
        mukta: ['Mukta Malar', 'sans-serif'], // Add Mukta Malar font
      },
      colors: {
        // Add custom colors here
        'primary': '#4F46E5', // Example: Primary color
        'secondary': '#6B7280', // Example: Secondary color
        'accent': '#FBBF24', // Example: Accent color
        'light-gray': '#F9FAFB', // Light gray background
      },
      spacing: {
        // Add custom spacing if needed
        '128': '32rem', // Example: Custom spacing for margins/padding
      },
      
      // =======================================================
      //  NEW ADDITIONS FOR FLOATING ICONS
      // =======================================================
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '30%': { transform: 'translateY(-20px) translateX(15px)' },
          '60%': { transform: 'translateY(20px) translateX(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.05' },
        }
      },
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
      },
      // =======================================================
      
    },
  },
  plugins: [],
};