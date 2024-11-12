import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}', // Include Storybook files
  ],
  darkMode: 'class', // Tailwind's dark mode via class
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF', // Light background color
          text: '#000000', // Light text color
          positive: '#4CAF50',
          negative: '#FF5722',
        },
        dark: {
          background: '#333333', // Dark background color
          text: '#FFFFFF', // Dark text color
          positive: '#4CAF50',
          negative: '#FF5722',
        },
      },
    },
  },
};

export default config;
