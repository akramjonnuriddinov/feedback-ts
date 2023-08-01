/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'board-bg':
          'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)'
      },
      backgroundColor: {
        primary: '#AD1FEA',
        'light-blue': '#F2F4FF',
        'primary-dark': '#4661E6',
        'app-bg': '#F7F8FD'
      },
      colors: {
        'dark-sky': '#4661E6'
      },
      maxWidth: {
        255: '255px',
        825: '825px',
        410: '410px',
        540: '540px',
        600: '600px',
        1110: '1110px'
      },
      minHeight: {
        96: '96px'
      },
      padding: {
        7.5: '34px',
        15: '60px',
        94: '94px'
      },
      margin: {
        15: '60px'
      },
      borderRadius: {
        10: '10px'
      },
      borderColor: {
        primary: '#AD1FEA'
      }
    }
  },
  plugins: []
}
