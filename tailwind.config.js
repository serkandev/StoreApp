/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/*.{js,jsx,ts,tsx}',
    './components/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: '#f1f1f1',
        defaultCardColor: '#ffffff',
        greenButtonColor: '#48d861',
        redbuttonColor: '#f14b4e',
        starIconcolor: '#f14b4e',
        defaultWhiteTextColor: '#ffffff',
        increaseButtonColor: '#7db896',
        defaultBlackTextColor: 'black',
        SecondTitleColor: '#b0b0b0',
      },
    },
  },
  plugins: [],
};
