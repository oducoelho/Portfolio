import { styled } from "..";

export const CarrerContainer = styled('section', {})
export const Header = styled('div', {
  marginTop: '400px',
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

/////////////////////////////////////////////////////////////////////

export const Content = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  marginTop: '114px',
  margin: '114px 150px 0 150px',
  gap: '150px',
})
export const Proficional = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '64px',
  div: {  
    backgroundColor: '$white300',
    borderRadius: 15,
  }
})
export const Academica = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '64px',
  div: {  
    backgroundColor: '$white300',
    borderRadius: 15,
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
  justifyContent: 'space-between',
  gap: '20px',
  border: 0,
  paddingBottom: '30px',

  span: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '12px',
    color: '$gray100',

    borderRadius: 4,
    padding: '2px',
  }
})