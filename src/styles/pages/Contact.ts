import { styled } from "..";

export const ContactContainer =styled('section', {
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})
export const Header =styled('div', {
  marginTop: '114px',
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

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
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 2fr)',
  margin: '220px 450px 0 450px',

  '@media (max-width: 1024px)': {
    display: 'flex',
    flexDirection: 'column',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media (max-width: 1024px)': {
      paddingBottom: '30px',
    },
    button: {
      marginTop: '15px',
      fontSize: '$md',
      height: '45px',
      width: '200px',
      color: '$text', 
      cursor: 'pointer',
      
      border: '1px solid #ccc',
      background: '$background',
      borderRadius: 8,
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    
      '@media (max-width: 1024px)': {
        height: '45px',
        width: '150px',
      },
      '@media (max-width: 425px)': {
        marginTop: '-20px',
      },
    },
  }
})
export const Email = styled('div', {
  fontSize: '1.6rem',
  lineHeight: 1.6,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  span: { 
    color: '$purple',
    lineHeight: 1.6,
  }
})
export const Footer = styled('div', {
  paddingTop: '100px',
  color: '$purple100',
  fontSize: '$sm',
  paddingBottom: '300px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
  '@media (max-width: 1024px)': {
    paddingBottom: '100px',
  },
  h1: {
    cursor: 'pointer',
  }
})
