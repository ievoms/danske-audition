import styled from "@emotion/styled"
import { NavBar } from "../components/NavBar"

const Container = styled.div`
  display: flex;
  background: #99e34a;
  min-height: 100vh;
`

interface PageContainerProps {
  children: JSX.Element
}
export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Container>
      <NavBar />
      <div>{children}</div>
    </Container>
  )
}
