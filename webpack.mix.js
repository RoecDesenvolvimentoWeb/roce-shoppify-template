let mix = require('laravel-mix');
const tailwind = require('tailwindcss');
mix
  .js('src/js/app.js', 'assets')
  .sass('src/scss/app.scss', 'assets')
  .options({ processCssUrls: false, postCss: [tailwind('tailwind.config.js')] });
