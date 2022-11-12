import { styled } from "..";

export const CarrerContainer = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1350px',
})
export const Header = styled('div', {
  marginTop: '400px',
  textAlign: 'center',

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

/////////////////////////////////////////////////////////////////////

export const Content = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  marginTop: '114px',
  margin: '114px 50px 0 50px',
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
    border: '1px solid $purple100',
    borderRadius: 15,
  },

})
export const Academica = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '64px',
  fontSize: '1.6rem',
  div: {  
    border: '1px solid $purple100',
    borderRadius: 15,
  }
})
export const Options = styled('div', {
  padding: '0 30px 0 30px' ,
})
export const Title = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  //margin: '0 30px 0 30px',
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
    color: '$purple100',

    borderRadius: 4,
    padding: '2px',

    strong: {
      fontWeight: 'bold',
    }
  }
})