import React from "react"

import * as Styled from "./styled"

const Button = ({ primary, block, children }) => (
  <Styled.Button
    primary={primary}
    block={block}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </Styled.Button>
)

export default Button
