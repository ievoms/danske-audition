import React from "react"
import styled from "@emotion/styled"
import { NavBar } from "../components/Navigation/NavBar"

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`
const Navigation = styled(NavBar)`
  width: 20%;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background: #dadada8f;
`

interface PageContainerProps {
  children: JSX.Element | JSX.Element[]
}
export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Container>
      <Navigation />
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}
