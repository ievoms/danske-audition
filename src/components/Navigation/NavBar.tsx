import React from "react"
import styled from "@emotion/styled"
import { ROUTE_ABOUT, ROUTE_FILMS } from "../../utils/routes"
import { NavItem } from "./NavItem"
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 30px;
`
const navigationItems = [
  { to: ROUTE_ABOUT, pathname: "about", text: "About" },
  { to: ROUTE_FILMS, pathname: "films", text: "Films" },
]
interface NavBarProps {
  className?: string
}
export const NavBar = ({ className }: NavBarProps) => {
  return (
    <Container className={className}>
      <Title>Navigation</Title>
      <Nav>
        {navigationItems.map((item) => (
          <NavItem
            key={`navigation-${item.to}`}
            to={item.to}
            pathname={item.pathname}
            text={item.text}
          />
        ))}
      </Nav>
    </Container>
  )
}
