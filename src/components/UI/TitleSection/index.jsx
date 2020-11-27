import React from "react"

import * as Styled from "./styled"

const TitleSection = ({ center, title, subtitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle center={center}>{title}</Styled.SubTitle>}
    <Styled.Title center={center}>{subtitle}</Styled.Title>
    <Styled.Separator center={center} />
  </Styled.TitleSection>
)

export default TitleSection
