module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        darkBackground: '#121212', // الأسود الداكن
        darkGray: '#2A2A2A', // الرمادي البارد
        mediumGray: '#444444', // الرمادي المتوسط
        offWhite: '#E0E0E0', // الأبيض العاجي للنصوص
        lightGray: '#B0B0B0', // الرمادي الفاتح للنصوص الثانوية
        interactiveBlue: '#0091FF', // الأزرق للعناصر التفاعلية
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};
