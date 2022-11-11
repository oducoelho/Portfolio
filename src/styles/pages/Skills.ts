import { styled } from "..";

export const SkillsContainer = styled('section',{
  margin: '0 275px',
})

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
export const Content = styled('div', {
  display: 'flex',
  margin: '200px 0',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  span: {
    paddingBottom: '40px',
    fontWeight: 400,
    fontSize: '24px',
    fontHeight: '28px',
    color: '$gray300'
  }

})