module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors :{
        'whitish' : '#fff',
        'primary' : '#1D1E1F',
        'subtext-nav' : '#767678',
        'subtext' : '#343536',
        'link-underline' : '#373839',
        'light-bg' : '#f2f2f4',
        'deep-blue': '#2d519b',
        'primary-blue' : '#2965ce',
        'purple' : '#844fba',
        'primary-text': '#727274',
        'footer-input' : '#1d1e1f'
      },
      width: {
        "space-between": "47%",
        "23%": "23%",
        "28%": "28%",
        "20%": "20%",
      },
      stroke: theme => ({
       'purple': theme('colors.purple'),
     }),
      fill: theme => ({
       'white': theme('colors.whitish'),
     }),
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      transform : ['hover','group-hover'],
      margin : ['group-hover','hover'],
      stroke: ['group-hover'],
      fill: ['hover','group-hover']
    },
  },
  plugins: [],
}
