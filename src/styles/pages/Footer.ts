import { styled } from "..";

export const FooterContainer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$purple50',
  height: '88px',
  width: '100%',

  '@media (max-width: 1024px)': {
    fontSize: '$md',
  },
})