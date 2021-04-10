const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'nothing',
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#DBEAFE',
          '500': '#3B82F6',
          '600': '#2563EB'
        },
        secondary: {
          '100': '#E0E7FF',
          '500': '#6366F1',
          '600': '#4F46E5'
        },
        success: {
          '100': '#D1FAE5',
          '500': '#10B981',
          '600': '#059669'
        },
        danger: {
          '100': '#FEE2E2',
          '500': '#EF4444',
          '600': '#DC2626'
        },
        warning: {
          '100': '#FEF3C7',
          '500': '#F59E0B',
          '600': '#D97706'
        },
        info: {
          '100': '#DBEAFE',
          '500': '#3B82F6',
          '600': '#2563EB'
        }
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
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
          fontWeight: 'bold'
        },
        'pre code': {
          backgroundColor: 'transparent'
        },
        'code': {
          backgroundColor: '#EFF6FF'
        },
        'a': {
          color: '#3B82F6'
        },
        'li a': {
          color: '#6B7280'
        }
      })
    }),
    plugin(function ({ addVariant, prefix, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`${className}`)}`
        })
      })

      addVariant('dark-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-mode .${e(`dark-hover${separator}${className}`)}:hover`
        })
      })

      addVariant('dark-focus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-mode .${e(`dark-focus${separator}${className}`)}:focus`
        })
      })
    }),
  ]
}