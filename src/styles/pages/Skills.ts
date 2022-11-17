import { styled } from "..";

export const SkillsContainer = styled('section',{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',
})
export const Header = styled('div', {
  marginTop: '114px',
  span: {
      paddingTop: '115px',
      paddingRight: '65px',
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
      paddingTop: '8px',

    },
})
export const Content = styled('div', {
  display: 'flex',
  margin: '150px 0',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',


  span: {
    paddingBottom: '100px',
    fontWeight: 400,
    fontSize: '$xl',
    fontHeight: '28px',
    color: '$white100',
  }

})
export const Box = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridGap: '80px',
  width: '80%',
  
  '@media (max-width: 688px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  div: {
    width: '200px',
    height: '200px',
    boxShadow: '0 5px 10px #ccc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 15,
    
    '&:hover': {
      transform: 'scale(1.05)',
      duration: 250,
    },
    p: {
      fontSize: '$md',
      marginTop: '15px',
    }
  }
})