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
    },
  },
  plugins: [],
};
