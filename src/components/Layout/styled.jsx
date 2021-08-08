import styled from 'styled-components'
import '../../styles/typography.css'

export const Layout = styled.main`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
  
  & > * {
    grid-column: 2;
  }
`
