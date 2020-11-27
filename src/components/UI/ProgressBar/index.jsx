import React from "react"

import * as Styled from "./styled"

const ProgressBar = ({ title, percentage }) => (
  <Styled.ProgressBar>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Percentage>{percentage}%</Styled.Percentage>
    </Styled.Content>
    <Styled.BarWrapper>
      <Styled.Bar percentage={percentage} />
    </Styled.BarWrapper>
  </Styled.ProgressBar>
)

export default ProgressBar
