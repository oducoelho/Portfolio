import { styled } from "..";

export const HomeContainer = styled('section', {
  height: '100vh',
  margin: '50px auto',
  width: '90%',
  maxWidth: '1350px',

  '@media (max-width: 1024px)': {
    //marginTop: '17px',
    HomeContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
})
export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 1024px)': {
    display: 'flex',
    flexDirection: 'column',
  },
  div: {
    color: '$text',
    paddingTop: '42px',
    '@media (max-width: 1024px)': {
      HomeContainer: {
        justifyContent: 'center',
      }
    },
  }
})
export const Picture = styled('div', {
  paddingRight: '60px',
  '@media (max-width: 1024px)': {
    position: 'absolute',
    bottom: '100px',
    left: '200px',
  },
  '@media (max-width: 768px)': {
    position: 'absolute',
    bottom: '100px',
    left: '100px',
  },
  '@media (max-width: 425px)': {
    position: 'absolute',
    bottom: '400px',
    left: '75px',
    img: { 
      width: '290px',
    }
  },
})
export const Name = styled('div', {
  h1: {
    fontSize: '4.5rem',
    fontWeight: 700,
    color: '$white',
    '@media (max-width: 1024px)': {
      textAlign: 'center',
    },
  },
  p: {
    fontSize: '$md',
    lineHeight: 2.6,
    '@media (max-width: 1024px)': {
      textAlign: 'center',
    },
  },
  ul: {
    display: 'flex',
    gap: '10px',
    listStyle: 'none',
    li: {
      cursor: 'poiner',
    },
  },
  '@media (max-width: 1024px)': {
    position: 'absolute',
    bottom: '-50px',
  },
  '@media (max-width: 425px)': {
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    top: '450px',
  },
})
export const Download = styled('div', {
  '@media (max-width: 1024px)': {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    marginTop: '780px',
  },
  '@media (max-width: 425px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginTop: '500px',
  },
  span: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'end',

    fontFamily: 'Inter',
    fontweight: 500,
    fontSize: '$sm',

    cursor: 'pointer',
  },
  button: {
    marginTop: '15px',
    fontSize: '$md',
    height: '45px',
    width: '200px',
    color: '$text', 
    cursor: 'pointer',
    
    border: '1px solid #ccc',
    background: '$background',
    borderRadius: 8,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
})
