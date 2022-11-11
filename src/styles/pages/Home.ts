import { styled } from "..";

export const HomeContainer = styled('section', {
  margin: '185px 275px',
  display: 'grid',
  height: '510px',
  gridTemplateColumns: 'repeat(2, 1fr)',
})
export const Content = styled('div', {
  span: {
    fontFamily: 'Inter',
    fontweight: 500,
    fontSize: '12px',
    letterSpacing: '7.5px',
  },

  h1: {
    fontSize: '44px',
    fontWeight: 700,
    lineHeight: '55px',
    color: '$gray300',
    padding: '16px 0 32px 0',

    strong: {
      color: '$purple'
    },
  },

  p: {
    fontFamily: 'Inter',
    fontweight: 400,
    lineHeight: '32px',
    color: '$gray300',
  },

  div: {
    color: '$gray300',
    paddingTop: '42px',
  }
})
export const Picture = styled('div', {
  position: 'absolute',
  width: '545px',
  height: '496px',
  left: '1115px',
  top: '200px',
})