import React from "react"

import * as Styled from "./styled"

const Container = ({ section, children }) => (
  <Styled.Container section={section}>{children}</Styled.Container>
)

export default Container
