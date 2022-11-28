import { styled } from "..";

export const AboutContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
  '@media (max-width: 1024px)': {
    img: {
      width: '0px',
    },
    div: {
      
    }
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
  }
})