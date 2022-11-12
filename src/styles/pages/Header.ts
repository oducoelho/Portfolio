import { styled } from "..";

export const HeaderContainer = styled('div', {
  alignItems: 'center',
  color: '$white100',
  fontFamily: 'Roboto',
  fontWeight: 400,

  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
  width: '90%',
  paddingTop: '40px',
  maxWidth: '1350px',

  //position: 'fixed',
  
  div: {      
    '@media (max-width: 1024px)': {
      display: 'none',
    },
    button: {
      color: '$white100',
      width: '100px',
      height: '41px',
      borderRadius: 8,
      backgroundColor: 'transparent',
      border: '1px solid #ccc',
      cursor: 'pointer',
    }
  }
})

export const Options = styled('div', {
 
  span: {
    cursor: 'pointer',
  },
  display: 'flex',
  fontSize: '$md',
  gap: '100px'
})