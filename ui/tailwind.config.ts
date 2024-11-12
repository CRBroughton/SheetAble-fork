import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        positive: '#4CAF50',
        negative: '#FF5722',
        neutral: '#858585',
        light: {
          background: '#FFFFFF',
          text: '#000000',
        },
        dark: {
          background: '#333333',
          text: '#FFFFFF',
        },
      },
    },
  },
};

export default config;
