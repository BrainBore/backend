/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        umsa: {
          blue: '#00447e',
          orange: '#ea580c',
          'white-soft': '#f5f5f5',
          crema: '#f8fafc',
          perla: '#fafafa',
          'border-light': '#e2e8f0',
          'text-suave': '#64748b',
          'text-medio': '#374151',
        },
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(135deg, #00447e 0%, #003a6b 50%, #00325a 100%)',
        'gradient-cta': 'linear-gradient(135deg, #00447e 0%, #00447ecc 100%)',
      },
    },
  },
  plugins: [],
}
