import { styled } from "..";

export const HomeContainer = styled('section', {
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',

  '@media (max-width: 1024px)': {
    //marginTop: '17px',
    HomeContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
})
export const Content = styled('div', {
  paddingBottom: '130px',
  span: {
    fontFamily: 'Inter',
    fontweight: 500,
    fontSize: '$ss',
    letterSpacing: '7.5px',
  },

  h1: {
    fontSize: '4.4rem',
    fontWeight: 700,
    lineHeight: '5.5rem',
    color: '$white',
    padding: '16px 0 32px 0',

    strong: {
      color: '$purple'
    },
  },

  p: {
    fontFamily: 'Inter',
    fontweight: 400,
    lineHeight: '3.2rem',
    color: '$text',
    fontSize: '1.6rem'
  },

  div: {
    color: '$text',
    paddingTop: '42px',
    '@media (max-width: 1024px)': {
      HomeContainer: {
        justifyContent: 'center',
      }
    },
  }
})
export const Picture = styled('div', {
  paddingBottom: '130px',
  '@media (max-width: 1024px)': {
    img: {
      width: '0',  
    }
  },
})

