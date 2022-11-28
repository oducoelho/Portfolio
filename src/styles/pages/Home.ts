import { styled } from "..";

export const HomeContainer = styled('section', {
  height: '100vh',
  margin: '100px auto',
  width: '90%',
  maxWidth: '1350px',
  
  '@media (max-width: 425px)': {
    margin: '0 auto',
  },
})
export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    color: '$text',
    paddingTop: '42px',
  }
})
export const Picture = styled('div', {  
  paddingRight: '60px',
  '@media (max-width: 1024px)': {
    paddingRight: '0px',
    img: {
      width: '500px',
      marginLeft: '5px',
    },
  },
  '@media (max-width: 768px)': {
    img: {
      marginLeft: '105px',
    },
  },
  '@media (max-width: 425px)': {
    img: {
      width: '400px',
      marginLeft: '5px',
    },
  },
})
export const Name = styled('div', {
  h1: {
    fontSize: '4.5rem',
    fontWeight: 700,
    color: '$white',
  },
  p: {
    fontSize: '$md',
    lineHeight: 2.6,
  },
  ul: {
    listStyle: 'none',
    textDecoration: 'none',
    display: 'flex',
    gap: '10px',
  },
  '@media (max-width: 768px)': {
    position: 'absolute',
    top: '590px',
  },
  '@media (max-width: 425px)': {
    position: 'absolute',
    top: '520px',
  },
})
export const Download = styled('div', {
  '@media (max-width: 768px)': {
    position: 'absolute',
    top: '750px',

    display: 'flex',
    flexDirection: 'row',
    gap: '100px',

    span: {
      paddingTop: '15px',
    },
  },
  '@media (max-width: 425px)': {
    position: 'absolute',
    top: '650px',

    display: 'flex',
    flexDirection: 'row',
    gap: '100px',

    span: {
      paddingTop: '15px',
    },
  },
  span: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'end',

    fontFamily: 'Inter',
    fontweight: 500,
    fontSize: '$sm',
    a: {
      textDecoration: 'none',
      color: '$gray100',
    },

    cursor: 'pointer',
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
  },
})
