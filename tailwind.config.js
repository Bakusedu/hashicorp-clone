module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors :{
        'primary' : '#474748',
        'light-bg' : '#f2f2f4',
        'deep-blue': '#2d519b',
        'primary-blue' : '#2965ce',
        'purple' : '#844fba',
        'primary-text': '#727274'
      },
      width: {
        "space-between": "47%",
        "23%": "23%",
        "28%": "28%",
      },
      stroke: theme => ({
       'purple': theme('colors.purple'),
     })
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      transform : ['hover','group-hover'],
      margin : ['group-hover','hover'],
      stroke: ['group-hover'],
    },
  },
  plugins: [],
}
