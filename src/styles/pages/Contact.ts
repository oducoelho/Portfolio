import { styled } from "..";

export const ContactContainer =styled('section', {
  padding: '0px 275px',
  backgroundColor: '$bgSecondery',
  '@media (max-width: 688px)': {
    padding: '0px 30px',
  },
})
export const Header =styled('div', {
  paddingTop: '100px',
  textAlign: 'center',
  '@media (max-width: 425px)': {
    textAlign: 'initial',
  },

  span: {
    fontFamily: 'Inter',
    fontweight: 500,
    fontSize: '$ss',
    paddingTop: '115px',
    paddingRight: '5px',
    color: '$white100',
    letterSpacing: '7.5px',

    '@media (max-width: 1024px)': {
      paddingTop: 0,
    },
  },

  h2: {
    fontSize: '$3xl',
    fontWeight: 700,
    lineHeight: '5.5rem',
    color: '$white',
    paddingTop: '8px',
  },
})
export const Content =styled('div', {
  div: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '100px 0px',
    gap: '20px',

    div: {
      p: {
        fontSize: '$md',

      }
    }
  }
})