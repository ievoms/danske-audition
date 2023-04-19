import React from "react"
import styled from "@emotion/styled"
import { Link, useLocation } from "react-router-dom"

const NavText = styled.p`
  padding-left: 30px;
`
const NavLink = styled(Link)<{ highlight?: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${({ highlight }) => (highlight ? "#6d1c77" : "#6c6b6b")};
  background-color: ${({ highlight }) => (highlight ? "#d7e5fa" : "inherit")};
  text-decoration: none;
  border-bottom: 1px solid #a9a7a7;
  width: 100%;
  cursor: pointer;
`
interface NavItemProps {
  to: string
  pathname: string
  text: string
}
export const NavItem = ({ to, pathname, text }: NavItemProps) => {
  const location = useLocation()
  return (
    <NavLink to={to} highlight={location.pathname.includes(pathname)}>
      <NavText>{text}</NavText>
    </NavLink>
  )
}
