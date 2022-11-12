import { styled } from "..";

export const ContactContainer =styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',

  '@media (max-width: 1024px)': {
    marginTop: '700px',
  },
})
export const Header =styled('div', {
  paddingTop: '100px',
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
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

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
  h1: {
    cursor: 'pointer',
  }
})