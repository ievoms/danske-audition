import React from "react"
import { PeopleType } from "../utils/types"
import { Container } from "./Container"
import { Text } from "./Typography"
import styled from "@emotion/styled"
import { Loading } from "./Loading"

const Table = styled.table`
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
`
const THead = styled.thead`
  text-align: left;
  background-color: #89b2f5;
`
const TBody = styled.tbody`
  width: 100%;
`
const Th = styled.th`
  padding: 10px;
`
const Tr = styled.tr`
  border-bottom: 1px solid #cfcfcf;
`
const Td = styled.td`
  padding: 10px;
`
interface PeopleBlockProps {
  filmId?: string
  filmTitle: string
  people: PeopleType[]
  loadingTitle: boolean
  loadingPeople: boolean
}
export const PeopleBlock = ({
  filmId,
  filmTitle,
  people,
  loadingTitle,
  loadingPeople,
}: PeopleBlockProps) => {
  return (
    <>
      {filmId ? (
        <Container>
          {loadingTitle ? <Loading /> : <Text bold>{filmTitle}</Text>}
          {loadingPeople ? (
            <Loading />
          ) : (
            <Table>
              <THead>
                <Th>Name</Th>
                <Th>Birth Year</Th>
                <Th>Gender</Th>
                <Th>Mass</Th>
              </THead>
              <TBody>
                {people.map((item) => (
                  <Tr key={`people-${item.birth_year}-${item.name}`}>
                    <Td>{item.name}</Td>
                    <Td>{item.birth_year}</Td>
                    <Td>{item.gender}</Td>
                    <Td>{item.mass}</Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          )}
        </Container>
      ) : null}
    </>
  )
}
