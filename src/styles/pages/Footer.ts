import { styled } from "..";

export const FooterContainer = styled('footer', {
  padding: '0px 275px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$bgPrimary',
  height: '88px',
  width: '100%',
  fontSize: '$ss',
  div: {
    ul: {
      listStyle: 'none',
      textDecoration: 'none',
      display: 'flex',
      gap: '10px',
      li: {
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
          top: '-5px',
        }
      }
    },
  },

  '@media (max-width: 1024px)': {
    fontSize: '$md',
  },
  '@media (max-width: 425px)': {
    padding: '0px 10px',
    fontSize: '$ss',
  },
})