import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '::-webkit-scrollbar': {
      width: '7px',
    },

    '::-webkit-scrollbar-track': {
      background: '$background',
    },

    '::-webkit-scrollbar-thumb': {
      background: '$gray100',
      borderRadius: '0.5rem',
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: '$gray300',
    }
  },

  html: {
    fontSize: '62.5%',
  },
  body: {
    margin: '0 auto',
    backgroundColor: '$bgPrimary',
    color: '$white',
    '-webkit-font-smoothing': 'antialiased',


  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '@media (max-width: 1440px)': {
    html: {
      fontSize: '50%',
    }
  },
  '@media (max-width: 1024px)': {
    html: {
      fontSize: '50%',
    }
  },
})

