import React, { useEffect, useState } from "react"
import { PageContainer } from "./PageContainer"
import { PeopleBlock } from "../components/PeopleBlock"
import { FilmType, PeopleType } from "../utils/types"
import { FilmsBlock } from "../components/Films/FilmsBlock"
import { useParams } from "react-router-dom"

export const Films = () => {
  const { id } = useParams()
  const [films, setFilms] = useState<FilmType[]>([])
  const [people, setPeople] = useState<PeopleType[]>([])
  const [filmTitle, setFilmTitle] = useState("")

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => setFilms(data.results))
  }, [])

  useEffect(() => {
    if (id)
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
    <PageContainer>
      <FilmsBlock films={films} />
      <PeopleBlock filmId={id} filmTitle={filmTitle} people={people} />
    </PageContainer>
  )
}
