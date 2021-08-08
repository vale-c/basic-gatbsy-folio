import { colors as defaultColors } from '../styles/colors'

const lightTheme = {
  backgroundColor: defaultColors['gray-lightest'],
  fontAccent: defaultColors['indigo'],
  underlineAccent: defaultColors['indigo-lighter'],
  description: defaultColors['grey-darkest'],
  borderAccent: defaultColors['grey-light'],
  toggle: defaultColors['indigo-light'],
  neumorphShadowOne: '#666666',
  neumorphShadowTwo: defaultColors['white'],
}

const darkTheme = {
  backgroundColor: defaultColors['blue-darkest'],
  fontAccent: defaultColors['green-light'],
  underlineAccent: defaultColors['green-lighter'],
  description: defaultColors['white'],
  borderAccent: defaultColors['white'],
  toggle: defaultColors['grey-dark'],
  neumorphShadowOne: '#071017',
  neumorphShadowTwo: '#1d405d',
}

export { lightTheme, darkTheme }
