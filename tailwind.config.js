module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      '0': '0',
      '150': '150px',
    },
    backgroundColor: theme => ({
      'green-ash': '#9fdbad',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
