import { styled } from "..";

export const ServicesContainer = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  span: {
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
    padding: '8px 0 250px 0',
  },
})

export const Boxes = styled('div', {
  color: '$white100',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '56px',
  paddingBottom: '200px',

  div: {
    width: '361px',
    height: '294px',
    border: '1px solid  $purple100',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    span: {
      fontWeight: 500,
      lineHeight: '2.0rem',
      color: '$white100',
      padding: '20px 0',
      fontSize: '1.6rem',
    },

    p: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '$sm',
      lineHeight: '2.4rem',
      textAlign: 'center',
      color: '$white100',
    }
  }
})

export const Image = styled('section', {
  width: '56px',
  height: '56px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

})