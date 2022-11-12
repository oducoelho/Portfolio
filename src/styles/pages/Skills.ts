import { styled } from "..";

export const SkillsContainer = styled('section',{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',
  //'@media (max-width: 1440px)': {
  //  marginTop: '700px',
  //},
})

export const Header = styled('div', {
  marginTop: '400px',
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
  margin: '200px 0',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '@media (max-width: 1024px)': {
    img: {
      width: '0',
    }
  },
  span: {
    paddingBottom: '40px',
    fontWeight: 400,
    fontSize: '$xl',
    fontHeight: '28px',
    color: '$white100',
  }

})