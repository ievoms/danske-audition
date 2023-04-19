import styled from "@emotion/styled"
import { NavBar } from "../components/NavBar"
import React, { useEffect, useState } from "react"

const Container = styled.div`
  display: flex;
  background: #e4facd;
  min-height: 100vh;
`

interface PageContainerProps {
  children: JSX.Element | JSX.Element[]
}
export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Container>
      <NavBar />
      <div>{children}</div>
    </Container>
  )
}
