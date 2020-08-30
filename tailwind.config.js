module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    inset: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        primary: '#113f67',
        secondary: '#226597',
        tertiary: '#87c0cd',
        background: '#f3f9fb',
      },
      transitionProperty: {
        height: 'height',
        maxHeight: 'maxHeight',
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        200: '200px',
        full: '100%',
      },
    },
  },
  variants: {},
  plugins: [],
};
