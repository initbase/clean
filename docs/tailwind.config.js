const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { 
          fontSize: theme('fontSize.4xl'),
          paddingBottom: '1rem'
        },
        'h2': { 
          fontSize: theme('fontSize.2xl'),
          paddingBottom: '1rem',
          borderBottom: '1px solid gray',
          marginBottom: '1rem',
          paddingTop: '1rem',
        },
        'h3': { 
          fontSize: theme('fontSize.lg'),
          paddingBottom: '1rem',
          paddingTop: '1rem',
        },
      })
    })
  ]
}