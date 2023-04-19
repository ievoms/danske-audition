import React from "react"
import { FilmType } from "../../utils/types"
import { FilmItem } from "./FilmItem"
import { Container } from "../Container"
import { Loading } from "../Loading"

interface FilmsProps {
  films: FilmType[]
  loading: boolean
}
export const FilmsBlock = ({ films, loading }: FilmsProps) => {
  return (
    <Container horizontalScroll row>
      {loading ? (
        <Loading />
      ) : (
        films.map((film) => <FilmItem key={`film-${film.title}`} film={film} />)
      )}
    </Container>
  )
}
