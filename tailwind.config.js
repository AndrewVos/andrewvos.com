const purgeEnabled = process.env.NODE_ENV === 'production';

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: [
      "./src/**/*.html",
      "./src/**/*.js"
    ]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
