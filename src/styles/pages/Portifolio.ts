import { styled } from "..";

export const PortifolioContainer = styled('section', {
  margin: '0 275px',
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
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  marginTop: '114px',
  gap: '37px',
  maxWidth: '200px',
  
  div: {  
    backgroundColor: '$white300',
    borderRadius: 15,
    img: {
      width: '250px',
      margin: '30px',
      borderRadius: 15,
    }
  }
})
export const Options = styled('div', {
  padding: '0 30px 0 30px' ,
})
export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  //margin: '0 30px 0 30px',
  h3: {
    fontWeight: 500,
    lineHeight: '24px',
    color: '$gray300',
    padding: '20px 0' ,
  },
  p: {
    paddingBottom: '20px',
    fontSize: '$sm',
  },
})
export const Tags = styled('div', {
  display: 'flex',
  gap: '20px',
  border: 0,
  //margin: '0 30px 0 30px',

  span: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '12px',
    color: '$gray100',

    border: '1px solid #ccc',
    borderRadius: 4,
    padding: '2px',
  }
})