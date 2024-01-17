/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/Blog/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/Blog/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/Blog/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  }