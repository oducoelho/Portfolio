import { styled } from "..";

export const FooterContainer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray900',
  height: '88px',
  width: '100%',

  '@media (max-width: 1024px)': {
    fontSize: '$md',
  },
})