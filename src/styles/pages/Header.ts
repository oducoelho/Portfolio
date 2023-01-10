import { styled } from "..";

export const HeaderContainer = styled('div', {
  padding: '20px 275px',
  color: '$white100',
  fontFamily: 'Roboto',
  fontWeight: 400,
  backgroundColor: '#00000080',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',

  position: "fixed",
  top: '0px',
  zIndex: 1000,  

  '@media (max-width: 1440px)': {
    left: '60px',
  },

  '@media (max-width: 1024px)': {
    left: '60px',
  },

  '@media (max-width: 425px)': {
    justifyContent: 'flex-start',
    left: '23px',
  },

  img: {
    width: '40px',
    borderRadius: '50%',
  },
  span: {
    fontSize: '$md',
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
   
  '@media (max-width: 1024px)': {
    display: 'none',
    backgroundColor: 'transparent',
  },
})
export const MobileIcon = styled('div', {
  display: 'none',
  cursor: 'pointer',
  paddingRight: '16px',
  zIndex: 10,
  color: '$gray100',
  '@media (max-width: 994px)': {
    display: 'block',
    position: 'absolute',
    right: '1rem',
    cursor: 'pointer',
  }
})
export const MobileOptions = styled('div', {
  dispay: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alingItens: 'center',
  position: 'absolute',
  top: '-9px',
  left: '-23px',
  width: '115%',
  height: '100vh',
  color: 'white',
  backgroundColor: '#000000DE',

  p: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginTop: '30px',
    padding: '30px 180px',
    textTransform: 'capitalize',
    fontSize: '20px',
    lineHeight: '40px',
  }
})