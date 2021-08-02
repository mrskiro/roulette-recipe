import styled from "styled-components"

export const Main = ({ children }) => <StyledMain>{children}</StyledMain>

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
