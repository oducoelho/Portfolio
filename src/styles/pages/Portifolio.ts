import { styled } from "..";

export const PortifolioContainer = styled('section', {
  padding: '0px 275px',
  backgroundColor: 'green',
  '@media (max-width: 688px)': {
    padding: '0px 30px',
  },
})
export const Header = styled('div', {
  paddingTop: '100px',
  span: {
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
      color: '$white00',
    },
})
export const Content = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridGap: '50px',

  marginTop: '114px',
  fontSize: '1.6rem',

  '&:last-child': {
    paddingBottom: '50px',
  },
  
  '@media (max-width: 1024px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '20px',
  },
  
  '@media (max-width: 688px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  div: { 
    width: '305px',
    height: '440',
    boxShadow: '0 5px 10px gray',
    borderRadius: 15,
    overflow: 'hidden',

    '&:hover': {
      transform: 'scale(1.05)',
      transitionDuration: '300ms',
      backgroundColor: 'gray',
      color: '$black',


      h3: {
        fontWeight: 'bold',
        color: '$black',
      },

      p: {
        color: '$black',
        fontSize: '$ss',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 5,
      },
      span: {
        fontWeight: 'bold',
        color: '$black',
        backgroundColor: '#c0c0c0',
      }
    },
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
  padding: '0 30px' ,
})
export const Title = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  h3: {
    fontWeight: 500,
    lineHeight: '2.4rem',
    padding: '20px 0' ,
    color: '$white',
  },
  p: {
    fontSize: '$sm',
    color: '$white100',
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
  },
})
export const Tags = styled('section', {
  paddingTop: '20px',
  display: 'flex',
  gap: '10px',
  span: {
    fontFamily: 'Inter',
    fontSize: '$ss',
    color: '$white100',

    backgroundColor: '#d3d3d340',
    borderRadius: 4,
    padding: '5px',
  },
})