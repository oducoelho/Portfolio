import { styled } from "..";

export const ContactContainer =styled('section', {
  margin: '0 275px',
  height: '100vh',
})

export const Header =styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

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
export const Content =styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 2fr)',
  margin: '220px 450px 0 450px',
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 30px',

      border: '1px solid $gray300',
      backgroundColor: 'transparent',
      borderRadius: 8,


    }
  }
})

export const Email = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  span: {
    color: '$purple',
    lineHeight: 1.6,
  }
})