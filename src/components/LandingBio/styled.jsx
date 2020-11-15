import styled from "styled-components"

export const Container = styled.div`
  text-align: center;
`

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 80vh;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.description};
  padding: 0;
  margin-bottom: 1rem;
  font-size: 18px;
`

export const NameHeader = styled.h1`
  font-size: 32px;
`
