import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { ROUTE_FILMS } from "../../utils/routes"
import { FilmType } from "../../utils/types"
import { Text } from "../Typography"
const FilmCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  min-width: 300px;
  justify-content: space-between;
  box-shadow: 2px 2px 15px #888888;
  border-radius: 10px;
  background-color: #ffffff;
`
const FilmInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Episode = styled.div`
  font-size: 24px;
  background-color: #89b2f5;
  padding: 20px 30px;
  border-radius: 2px;
`

const NavLink = styled(Link)`
  color: "#6d1c77";
  margin-top: 20px;
  cursor: pointer;
`
interface FilmsProps {
  film: FilmType
}
export const FilmItem = ({ film }: FilmsProps) => {
  return (
    <FilmCard key={film.episode_id}>
      <FilmInformation>
        <div>
          <Text bold>{film.title}</Text>
          <Text>{film.release_date}</Text>
        </div>
        <Episode>{film.episode_id}</Episode>
      </FilmInformation>
      <NavLink
        to={`${ROUTE_FILMS}/${film.url.split("films/")[1]}`}
        state={{ characters: film?.characters || undefined }}
      >
        Show People
      </NavLink>
    </FilmCard>
  )
}
