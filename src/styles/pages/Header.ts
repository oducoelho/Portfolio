import { styled } from "..";

export const HeaderContainer = styled('div', {
  margin: '0 275px',
  marginTop: '56px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '$gray300',
  fontFamily: 'Roboto',
  fontWeight: 400,
  
  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '50px',

    div: {
      cursor: 'pointer',
    },  

    button: {
      width: '100px',
      height: '41px',
      borderRadius: 8,
      backgroundColor: 'transparent',
      border: '1px solid #ccc',
      cursor: 'pointer',
    }
  }
})

export const Options = styled('div', {
  span: {
    cursor: 'pointer',
  },
  display: 'flex',
  fontSize: '$md',
  gap: '100px'
})