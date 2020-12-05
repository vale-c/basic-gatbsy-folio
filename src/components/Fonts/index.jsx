import { createGlobalStyle } from 'styled-components'

import GTWalsheimMedium from '../../assets/fonts/GtWalsheim/gt-walsheim-medium.ttf'
import GTWalsheimLight from '../../assets/fonts/GTWalsheim/gt-walsheim-light.ttf'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'GT Walsheim';
    src: url(${GTWalsheimMedium}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'GT Walsheim';
    src: url(${GTWalsheimLight}) format('ttf');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'GT Walsheim';
    src: url(${GTWalsheimMedium}) format('ttf');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'GT Walsheim';
    src: url(${GTWalsheimBold}) format('ttf');
    font-weight: 700;
    font-style: italic;
  }
`
export default Fonts
