import { useEffect, useState } from "react"
import { FilmType, PeopleType } from "./types"
import { useParams } from "react-router-dom"

const endpoint = import.meta.env.VITE_API_ENDPOINT_FILMS || ""

export const useGetFilms = () => {
  const [films, setFilms] = useState<FilmType[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results)
        setLoading(false)
      })
  }, [])
  return { films, loading }
}

export const useGetPeople = () => {
  const { id } = useParams()
  const [people, setPeople] = useState<PeopleType[]>([])
  const [filmTitle, setFilmTitle] = useState("")
  const [loadingTitle, setLoadingTitle] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoadingTitle(true)
    setLoading(true)
    if (id)
      fetch(`${endpoint}/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFilmTitle(data.title)
          setLoadingTitle(false)
          const promises = data?.characters.map((link: string) =>
            fetch(link).then((res) => res.json())
          )
          Promise.all(promises).then((values) => {
            setPeople(values)
            setLoading(false)
          })
        })
  }, [id])
  return { filmTitle, loadingTitle, loading, people }
}
