import { Link } from "react-router-dom"
import { Button } from "./ui/Button"
import { RightArrow } from "../icon/RightArrow"
import { Logo } from "./ui/Logo"
import { BookIcon } from "../icon/Book"
import { StudenIcon } from "../icon/StudentIcon"
import { AdminIcon } from "../icon/AdminIcon"

export const Navbar=()=>{
    return(
        <div className="flex flex-row items-center justify-between bg-stone-800 px-35 p-2">
            <div>
                <Logo/>
            </div>
            <div className="flex gap-2">
                <Link to="/admin/signup"><Button frontIcon={<AdminIcon />} text="Admin Portal" variant="orange"/></Link>
                <Link to="/student/signup"><Button frontIcon={<StudenIcon />} text="Student Portal" variant="yellow"/></Link>
                <Link to="/teacher/signup"><Button frontIcon={<BookIcon/>} text="Teacher Portal" variant="green"/></Link>
            </div>
        </div>
    )
}