import { BrowserRouter , Route ,Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Button } from "./components/ui/Button"
import { RightArrow } from "./icon/rightArrow"
import { Statscard } from "./components/ui/StatsCard"
import { FeatureCards } from "./components/ui/FeaturesCard"
import { ReviewCard } from "./components/ui/ReviewsCard"

const App = () => {
  return (
    <>
    {/* <Button text="Admin portal" variant="orange" endIcon={<RightArrow/>}/>
    <Button text="Student portal" variant="green" endIcon={<RightArrow/>}/>
    <Button text="Teacher portal" variant="yellow" endIcon={<RightArrow/>}/> */}
    {/* <FeatureCards  icon={<RightArrow size="sm"/>} headText="Student Management" insideText="Comprehensive student profiles, enrollment tracking, academic records, and parent communication tools in one place."/> */}
    <ReviewCard reviewText="SchoolFlow has significantly improved our administrative efficiency. The student enrollment and fee collection processes are now much more streamlined." person="Dr. Sarah Johnson" profession="Principal, Sunrise Academy"  />
    </>
  )
}

export default App
