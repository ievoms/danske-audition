import React from "react"
import { FilmType } from "../../utils/types"
import { FilmItem } from "./FilmItem"
import { Container } from "../Container"

interface FilmsProps {
  films: FilmType[]
}
export const FilmsBlock = ({ films }: FilmsProps) => {
  return (
    <Container horizontalScroll row>
      {films.map((film) => (
        <FilmItem key={`film-${film.title}`} film={film} />
      ))}
    </Container>
  )
}
