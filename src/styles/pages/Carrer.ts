import { styled } from "..";

export const CarrerContainer = styled('section', {
  padding: '0px 275px',
  '@media (max-width: 688px)': {
    padding: '0px 30px',
  },
})
export const Header = styled('div', {
  paddingTop: '100px',
  textAlign: 'center',
  '@media (max-width: 425px)': {
    textAlign: 'initial',
  },

  span: {
    paddingRight: '140px',
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
export const Content = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  marginTop: '114px',
  margin: '114px 0px 0 0px',
  gap: '150px',
  '@media (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
  },
})
export const Proficional = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '64px',
  fontSize: '1.6rem',
  div: {  
    width: '100%',
    height: '170px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0 5px 10px #354985',
    borderRadius: 15,
    '&:hover': {
      transform: 'scale(1.05)',
      transitionDuration: '300ms',
      backgroundColor: '$bgSecondery',
      color: '$white',
      cursor: 'pointer',
      h3: {
        color: '$white'
      },
      p: {
        color: '$white'
      },
      span: {
        color: '$white'
      },
    }
  },

})
export const Academica = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '64px',
  fontSize: '1.6rem',

  '&:last-child': {
    paddingBottom: '50px',
  },
   
  div: {  
    width: '100%',
    height: '170px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0 5px 10px #354985',
    borderRadius: 15,
    '&:hover': {
      transform: 'scale(1.05)',
      transitionDuration: '300ms',
      backgroundColor: '$bgSecondery',
      color: '$white',
      cursor: 'pointer',
      h3: {
        color: '$white'
      },
      p: {
        color: '$white'
      },
      span: {
        color: '$white'
      },
    }
  }
})
export const Options = styled('div', {
  padding: '0 30px 0 30px' ,
})
export const Title = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  h3: {
    fontWeight: 500,
    lineHeight: '2.4rem',
    color: '$white',
    padding: '20px 0 10px 0',
    fontSize: '1.6rem',
  },
  p: {
    color: '$white100',
    paddingBottom: '20px',
    fontSize: '$sm',
  },
})
export const Tags = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  border: 0,
  paddingBottom: '30px',
  span: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '$ss',
    color: '$gray',

    borderRadius: 4,
    padding: '2px',

    strong: {
      fontWeight: 'bold',
    }
  }
})