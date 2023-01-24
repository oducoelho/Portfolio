import { createStitches } from "@stitches/react"

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      //background: '#090E16',
      background: '#121216',
      //background: '#1e1e1e',
      inputBackground: '#0c0b0e',

      text: '#7b7b7b',
      white: '#fff',
      white100: '#ffffff80;',

      white200: '#FBFBFB',
      white300: '#F5F3FE',
      
      gray: '#ABABAB',
      gray100: '#656D72',
      gray200: '#6B6B6B',
      gray300: '#232E35',
      gray400: '#ccc',
      gray500: '#202024',
      gray700: '#121214',
      gray900: '#1E1E1E',

      black: '#000',

      //New Colors to improve application

      bgPrimary: '#0F172A',
      bgSecondery: '#1E293B',

      bgAccent: '#7477FF',
    
      textAccent: '#7477FF',
    
    },

    fontSizes: {
      ss: '1.2rem',
      sm: '1.4rem',
      md: '1.8rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '3.6rem',
    }
  }
})
