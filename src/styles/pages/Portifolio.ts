import { styled } from "..";

export const PortifolioContainer = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',
})
export const Header = styled('div', {
  paddingTop: '113px',
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
      paddingTop: '8px',
      color: '$white00',
    },
})
export const Content = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridGap: '20px',

  marginTop: '114px',
  fontSize: '1.6rem',
  
  '@media (max-width: 1024px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    margin: '80px auto',
    gridGap: '20px',
    flexDirection: 'column',
  },
  
  '@media (max-width: 688px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  div: { 
    width: '300px',
    height: '440',
    border: '1px solid  $purple100',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 15,

    img: {
      display: 'flex',
      justifyContent: 'center',
      alingItems: 'center',
      width: '80%',
      margin: '30px',
      borderRadius: 15,
    }
  }
})
export const Options = styled('section', {
  padding: '0 30px 0 30px' ,
  
})
export const Title = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  h3: {
    fontWeight: 500,
    lineHeight: '2.4rem',
    color: '$white',
    padding: '20px 0' ,
  },
  p: {
    paddingBottom: '20px',
    fontSize: '$sm',
    color: '$white100',
  },
})
export const Tags = styled('section', {
  display: 'flex',
  gap: '20px',
  span: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '$ss',
    color: '$purple100',

    backgroundColor: '#7B4AE220',
    borderRadius: 4,
    padding: '5px',
  }
})