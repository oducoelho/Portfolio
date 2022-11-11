import { styled } from "..";

export const ServicesContainer = styled('section', {
  height: '100vh',
  margin: '0 275px',
})

export const Content = styled('div', {
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

export const Boxes = styled('div', {
  marginTop: '104px',
  borderRadius: 8,

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '56px',

  div: {
    width: '361px',
    height: '294px',
    backgroundColor: '$white100',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    div: {
      width: '56px',
      height: '56px',
      backgroundColor: '$white300',
      borderRadius: 8,
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    span: {
      fontWeight: 500,
      lineHeight: '20px',
      color: '$gray300',
      padding: '20px 0',
    },

    p: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '$sm',
      lineHeight: '24px',
      textAlign: 'center',
      color: '$gray300',
    }
  }
})