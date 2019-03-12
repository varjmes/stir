import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerGray: 10,
  bodyGray: 20,
  omitGoogleFont: true,
  headerFontFamily: [
    'Muli',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Montserrat', 'Arial', 'sans-serif'],
  includeNormalize: true
})

export default typography
