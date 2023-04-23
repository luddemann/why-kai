const plugin = require('tailwindcss/plugin')

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    ringColor: {
      DEFAULT: 'black',
    },
    ringWidth: {
      DEFAULT: '6px',
    },
    ringOpacity: {
      DEFAULT: '100',
    },
    outline: {
      DEFAULT: '0',
    },
    ringOffsetWidth: {
      DEFAULT: '2px',
    },
    ringOffsetColor: {
      DEFAULT: 'white',
    },
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('readonly', '&[readonly]')
      addVariant('hidden', '&[hidden]')
      addVariant('disabled', '&:where(:disabled, [disabled=true])')
    }),
  ],
}

