import { styled } from "..";

export const HeaderContainer = styled('div', {
  padding: '20px 23px',
  borderRadius: '20px',
  color: '$white100',
  fontFamily: 'Roboto',
  fontWeight: 400,
  backgroundColor: '#141418',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90%',
  maxWidth: '1350px',

  position: "fixed",
  top: '10px',
  left: '15%',
  
  span: {
    fontSize: '$md',
  },
  
  '@media (max-width: 1024px)': {
    display: 'none',
    backgroundColor: 'transparent',
  },
})

export const Options = styled('div', {
  display: 'flex',
  fontSize: '$md',
  gap: '30px',
  color: '$white',
  span: {
    cursor: 'pointer',
    '&:hover': {
      color: '$white100',
      transitionDuration: '100ms',
    },
  },
})