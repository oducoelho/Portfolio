import { createStitches } from '@stitches/react'

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
      white100: '#fff',
      white200: '#FBFBFB',
      white300: '#F5F3FE',
      
      gray100: '#656D72',
      gray300: '#232E35',
      gray900: '#1E1E1E',

      black: '#000',

      purple: '#7E74F1',
    },
    fontSizes: {
      sm: '0.875rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})
