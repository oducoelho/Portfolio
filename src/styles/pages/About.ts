import { styled } from "..";

export const AboutContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',
  '@media (max-width: 425px)': {
    width: '90%',
  },
})
export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  span: {
    //paddingRight: '45px',
    fontFamily: 'Inter',
    fontweight: 500,
    fontSize: '$ss',
    letterSpacing: '7.5px',
    color: '$white100',
    '@media (max-width: 768px)': {
      paddingTop: '8px',
    },
    '@media (max-width: 425px)': {
      paddingTop: '228px',
    },
  },

  h2: {
    fontSize: '$3xl',
    fontWeight: 700,
    lineHeight: '5.5rem',
    color: '$white',
    padding: '8px 0 190px 0',
    '@media (max-width: 768px)': {
      padding: '8px 0 100px 0',
    },
  },
})
export const Text = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  '@media (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '$ss'
  },

  img: { 
    width: '300px',
    borderRadius: 8,
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    h1: {
      fontSize: '$3xl',
    },
  }
})
export const Span = styled('span', {
  paddingTop: '25px',
  fontFamily: 'Inter',
  fontweight: 400,
  lineHeight: '2.2rem',
  color: '$text',
  fontSize: '1.6rem'
})
export const P = styled('p', {
  fontFamily: 'Inter',
  fontweight: 400,
  lineHeight: '4.2rem',
  color: '$text',
  fontSize: '1.6rem', 
})
export const Image = styled('div', {
  '@media (max-width: 768px)': {
    img: {
      width: '125px',
      //paddingRight: '150px',
      marginBottom: '15px',
    }
  },
})
