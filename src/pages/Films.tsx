import { useEffect, useState } from "react"
import { PageContainer } from "./PageContainer"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { ROUTE_FILMS } from "../utils/routes"
import { PeopleBlock } from "../components/PeopleBlock"
import React from "react"
import { FilmType } from "../utils/types"
const FilmCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f589dc;
  padding: 30px;
  min-width: 300px;
  justify-content: space-between;
`
const FilmsBlock = styled.div`
  display: flex;
  background: #bdeb69;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 80%;
`
export const Films = () => {
  const [films, setFilms] = useState<FilmType[]>([])
  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => setFilms(data.results))
  }, [])
  return (
    <PageContainer>
      <FilmsBlock>
        {films.map((film) => (
          <FilmCard key={film.episode_id}>
            <FilmInformation>
              <div>
                <div>{film.title}</div>
                <div>{film.release_date}</div>
              </div>
              <div>{film.episode_id}</div>
            </FilmInformation>
            <Link
              to={`${ROUTE_FILMS}/${film.url.split("films/")[1]}`}
              state={{ characters: film?.characters || undefined }}
            >
              Show People
            </Link>
          </FilmCard>
        ))}
      </FilmsBlock>
      <PeopleBlock />
    </PageContainer>
  )
}
const FilmInformation = styled.div`
  display: flex;
  justify-content: space-between;
  background: #89b2f5;
`
