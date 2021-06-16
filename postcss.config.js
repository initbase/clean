// postcss.config.js
module.exports = {
  plugins: [
    'cssnano',
    // require('tailwindcss'),
    // require('autoprefixer')
  ],
  preset: [
    'default',
    {
      calc: false,
      discardComments: {
        removeAll: true
      }
    }
  ]
};
