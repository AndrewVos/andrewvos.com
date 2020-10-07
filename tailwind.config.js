module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
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
