import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { useParams } from "react-router-dom"

import React from "react"
import { PeopleType } from "../utils/types"

const Block = styled.div`
  display: flex;
  background: #516330;
  gap: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 80%;
`

export const PeopleBlock = () => {
  const { id } = useParams()

  const [people, setPeople] = useState<PeopleType[]>([])
  const [filmTitle, setFilmTitle] = useState("")

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFilmTitle(data.title)
        const promises = data?.characters.map((link: string) =>
          fetch(link).then((res) => res.json())
        )
        Promise.all(promises).then((values) => setPeople(values))
      })
  }, [id])

  return (
    <Block>
      <div>{filmTitle}</div>
      <table>
        <thead>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Gender</th>
          <th>Mass</th>
        </thead>
        <tbody>
          {people.map((item) => (
            <tr key={`people-${item.birth_year}-${item.name}`}>
              <td>{item.name}</td>
              <td>{item.birth_year}</td>
              <td>{item.gender}</td>
              <td>{item.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Block>
  )
}
