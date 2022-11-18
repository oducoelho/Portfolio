import { styled } from "..";

export const AboutContainer = styled('section', {
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  span: {
    paddingRight: '45px',
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
    padding: '8px 0 190px 0',
  },
})

export const Text = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  img :{ 
    width: '300px',
    marginLeft: '150px',
    borderRadius: 8,
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    h1: {
      fontSize: '$3xl',
    },
    
    p: {
      fontFamily: 'Inter',
      fontweight: 400,
      lineHeight: '4.2rem',
      color: '$text',
      fontSize: '1.6rem'
    },

    span: {
      paddingTop: '25px',
      fontFamily: 'Inter',
      fontweight: 400,
      lineHeight: '2.2rem',
      color: '$text',
      fontSize: '1.6rem'
    },

    button: {
      marginTop: '45px',
      height: '45px',
      width: '200px',
      color: '$text',
      border: '1px solid #ccc',
      background: '$background',
      borderRadius: 8,
      cursor: 'pointer',
    }
  }
})