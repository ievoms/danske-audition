import styled from "@emotion/styled"
import { ROUTE_ABOUT, ROUTE_FILMS } from "../utils/routes"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #e34ac2;
  width: 20%;
`
export const NavBar = () => {
  return (
    <Container>
      Navigation
      <nav>
        <a href={ROUTE_ABOUT}>About</a>
        <a href={ROUTE_FILMS}>Films</a>
      </nav>
    </Container>
  )
}
