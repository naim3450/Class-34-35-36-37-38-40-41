import Navber from "./components/Navber"
import Footer from "./components/layouts/footer"
import Home from "./components/Listpage/Home"
import SubHeadder from "./components/layouts/SubHeadder"
import Shop from "./components/Listpage/Shop"
import About from "./components/Listpage/About"
import Contact from "./components/Listpage/Contact"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Home/></div>,
    },
    {
      path: "/Shop",
      element: <div><Shop/></div>,
    },
    {
      path: "/About",
      element: <div><About/></div>,
    },
    {
      path: "/Contact",
      element: <div><Contact/></div>,
    },
  ]);
  

  return (
    <>
     <Navber/>
     <SubHeadder/>
     <RouterProvider router={router} />
     <Footer/>
    </>
  )
}

export default App