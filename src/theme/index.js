import { colors as defaultColors } from '../styles/colors'

const lightTheme = {
  backgroundColor: defaultColors['gray-lightest'],
  fontAccent: defaultColors['indigo'],
  underlineAccent: defaultColors['indigo-lighter'],
  description: defaultColors['grey-darkest'],
  borderAccent: defaultColors['grey-light'],
  toggle: defaultColors['indigo-light'],
  neumorphShadowOne: '#EEEEEE',
  neumorphShadowTwo: '#F2F2F2',
}

const darkTheme = {
  backgroundColor: defaultColors['blue-darkest'],
  fontAccent: defaultColors['green-light'],
  underlineAccent: defaultColors['green-lighter'],
  description: defaultColors['white'],
  borderAccent: defaultColors['white'],
  toggle: defaultColors['grey-dark'],
  neumorphShadowOne: '#071017',
  neumorphShadowTwo: '#1D405D',
}

export { lightTheme, darkTheme }
