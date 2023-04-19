import React from "react"
import { PageContainer } from "./PageContainer"
import { PeopleBlock } from "../components/PeopleBlock"
import { FilmsBlock } from "../components/Films/FilmsBlock"
import { useParams } from "react-router-dom"
import { useGetFilms, useGetPeople } from "../utils/hooks"

export const Films = () => {
  const { id } = useParams()
  const { films, loading: filmsLoading } = useGetFilms()
  const {
    people,
    filmTitle,
    loadingTitle,
    loading: loadingPeople,
  } = useGetPeople()
  return (
    <PageContainer>
      <FilmsBlock films={films} loading={filmsLoading} />
      <PeopleBlock filmId={id} filmTitle={filmTitle} people={people} loadingTitle={loadingTitle} loadingPeople={loadingPeople} />
    </PageContainer>
  )
}
