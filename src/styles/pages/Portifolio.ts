import { styled } from "..";

export const PortifolioContainer = styled('section', {
  height: '100vh',
})
export const Header = styled('div', {
  paddingTop: '113px',
  span: {
      paddingTop: '115px',
      paddingRight: '65px',
      fontFamily: 'Inter',
      fontweight: 500,
      fontSize: '12px',
      letterSpacing: '7.5px',
    },

    h2: {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: '55px',
      color: '$gray300',
      paddingTop: '8px',

    },
})
export const Content = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '114px',
  gap: '56px',
  justifyContent: 'space-between',
  
  div: {
    border: '1px solid #ccc',
    borderTop: 0,
    borderRadius: '0px 0px 8px 8px',

    img: {
      borderRadius: '8px 8px 0px 0px',
    }
  }
})

export const Options = styled('section', {
  padding: '24px 0 20px 24px' ,

  h3: {
    fontWeight: 500,
    lineHeight: '24px',
    color: '$gray300',
    paddingBottom: '20px' ,
  },

  div: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    border: 0,

    span: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '15px',
      color: '$gray100',
  
      border: '1px solid #ccc',
      borderRadius: 4,
      padding: '2px',
    }
  }
 //border: '1px solid $gray300',
})