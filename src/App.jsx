import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Pastes from "./components/Pastes"
import Viewpastes from "./components/Viewpastes"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Pastes/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Viewpastes/>
    </div>,
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
