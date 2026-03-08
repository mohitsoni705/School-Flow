import { BrowserRouter , Route ,Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Button } from "./components/ui/Button"
import { RightArrow } from "./icon/rightArrow"
import { Statscard } from "./components/ui/StatsCard"
import { FeatureCards } from "./components/ui/FeaturesCard"
import { ReviewCard } from "./components/ui/ReviewsCard"
import { Navbar } from "./components/navbar"
import { TeacherPortal } from "./pages/TeacherPortal"

const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* <Home/> */}
    <TeacherPortal/>
    </BrowserRouter>
    </>
  )
}

export default App
