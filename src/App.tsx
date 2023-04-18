import { useEffect, useState } from "react"

import { NavBar } from "./components/NavBar"

function App() {
  const [data, setData] = useState({ name: "" })
  // useEffect(() => {
  //   fetch("https://swapi.dev/api/people/1")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  // }, [])
  // console.log(data)
  return <div>App</div>
}

export default App
