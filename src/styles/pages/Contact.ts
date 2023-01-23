import { styled } from "..";

export const ContactContainer =styled('section', {
  padding: '0px 275px',
  backgroundColor: 'red',
})
export const Header =styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  span: {
    fontFamily: 'Inter',
    fontweight: 500,
    fontSize: '$ss',
    paddingTop: '115px',
    paddingRight: '5px',
    color: '$white100',
    letterSpacing: '7.5px',

    '@media (max-width: 1024px)': {
      paddingTop: 0,
    },
  },

  h2: {
    fontSize: '$3xl',
    fontWeight: 700,
    lineHeight: '5.5rem',
    color: '$white',
    paddingTop: '8px',
  },
})
export const Content =styled('div', {
  padding: '150px 0px 200px 0px',
  '@media (max-width: 425px)': {
    display: 'flex',
    flexDirection: 'column',
    margin: '130px 0px',
  },
  form: {
    div: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  
      input: {
        width: '320%',
        marginBottom: '20px',
        backgroundColor: '$inputBackground',
        border: '1px solid $background',
        borderRadius: 8,
        color: '$white',

        '@media (max-width: 425px)': {
          width: '200%',
        },
      },

      button: {
        width: '200px',
        height: '45px',
        border: '1px solid $gray100',
        borderRadius: 8,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: '$white',

        '&:hover': {
          backgroundColor: '$gray100',
        }
      }
    }
  }
})
export const Email = styled('div', {
  input: {
    height: '45px',
    padding: '10px',
  }
})
export const Assunto = styled('div', {
  input: {
    height: '45px',
    padding: '10px',
  }
})
export const Menssagem = styled('div', {
  input: {
    height: '145px',
    padding: '0px 10px 110px 10px',
  }
})