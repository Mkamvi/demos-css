module.exports = {
  content: ['./public/**/*.html', './src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
