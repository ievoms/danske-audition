import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About } from "./pages/About"
import { Films } from "./pages/Films"
import { ROUTE_ABOUT, ROUTE_FILMS } from "./utils/routes"
const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: ROUTE_ABOUT,
    element: <About />,
  },
  {
    path: ROUTE_FILMS,
    element: <Films />,
  },
])
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
)
