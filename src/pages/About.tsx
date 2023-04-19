import { Container } from "../components/Container"
import { Text } from "../components/Typography"
import { PageContainer } from "./PageContainer"
import image from "/cat.jpeg"
import React from "react"
import styled from "@emotion/styled"
const Image = styled.img`
  width: 500px;
  object-fit: contain;
`
export const About = () => {
  return (
    <PageContainer>
      <Container alignLeft>
        <Text bold>About</Text>
        <Text>This is a very serious page for a very serious company</Text>
        <Image src={image}></Image>
        <Text>Please select me senpai</Text>
      </Container>
    </PageContainer>
  )
}
