import styled from "@emotion/styled"
import { ROUTE_ABOUT, ROUTE_FILMS } from "../utils/routes"
import { Link } from "react-router-dom"
import React from "react"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #e7cde1;
  width: 20%;
`
export const NavBar = () => {
  return (
    <Container>
      Navigation
      <nav>
        <Link to={ROUTE_ABOUT}>About</Link>
        <Link to={ROUTE_FILMS}>Films</Link>
      </nav>
    </Container>
  )
}
