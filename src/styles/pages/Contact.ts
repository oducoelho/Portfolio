import { styled } from "..";

export const ContactContainer =styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',

})
export const Header =styled('div', {
  marginTop: '114px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  span: {
    paddingTop: '115px',
    paddingRight: '5px',
    fontFamily: 'Inter',
    fontweight: 500,
    fontSize: '$ss',
    letterSpacing: '7.5px',
    color: '$white100',
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
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 2fr)',
  margin: '220px 450px 0 450px',

  '@media (max-width: 1024px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media (max-width: 1024px)': {
      paddingBottom: '30px',
    },
    button: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 25px',
      color: '$purple100',
      fontSize: '$md',

      border: '1px solid $purple',
      backgroundColor: 'transparent',
      borderRadius: 8,

      '@media (max-width: 1024px)': {
        fontSize: '$xl',
      },
    }
  }
})
export const Email = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1.6rem',
  span: { 
    color: '$purple',
    lineHeight: 1.6,
  }
})
export const Footer = styled('div', {
  paddingTop: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$purple100',
  fontSize: '$sm',
  paddingBottom: '300px',
  '@media (max-width: 1024px)': {
    paddingBottom: '100px',
  },
  h1: {
    cursor: 'pointer',
  }
})