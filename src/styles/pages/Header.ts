import { styled } from "..";

export const HeaderContainer = styled('div', {
  padding: '20px 23px',
  borderRadius: '20px',
  color: '$white100',
  fontFamily: 'Roboto',
  fontWeight: 400,
  backgroundColor: '#00000080',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '89%',
  maxWidth: '1350px',

  position: "fixed",
  top: '10px',
  left: '283px',
  
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