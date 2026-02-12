import "./App.css";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pastes from "./components/pastes";
import ViewPastes from "./components/viewpastes";
import { RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
 <div className="w-full h-screen flex flex-col">
  <Navbar />
  <div className="flex justify-center items-center flex-1">
    <Home />
  </div>
</div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Pastes />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <ViewPastes />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
