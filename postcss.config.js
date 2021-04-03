// postcss.config.js
module.exports = {
  plugins: [
    'cssnano',
    require('tailwindcss'),
    require('autoprefixer')
  ]
};
