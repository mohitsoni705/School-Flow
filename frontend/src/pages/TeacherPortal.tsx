import { Link, useNavigate } from "react-router-dom"
import { Input } from "../components/ui/Input"
import { StudenIcon } from "../icon/StudentIcon"
import { Button } from "../components/ui/Button"
import { BookIcon } from "../icon/Book"
import { useRef } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { RightArrow } from "../icon/RightArrow"

export const TeacherPortal = () => {
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const navigate = useNavigate();

    const handleOnClick=async()=>{
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try{
            const response = await axios.post(`${BACKEND_URL}/teacher/login`,{username,password});
            localStorage.setItem("token",response.data.token);
            alert("User has been Signed in");
            navigate("/")
        }catch(err){
            if(axios.isAxiosError(err)){
                if(err.response){
                    alert("Inavlid Username or password")
                }else if(err.request){
                    alert("Server Error")
                }else{
                    alert("Request Faild")
                }
            }else{
                alert("Unexpected Error")
            }

        }


    }
    return (
        <div className="flex items-center flex-col w-screen h-screen gap-2 bg-purple-50">

            <div className="text-purple-600 ">
                <Link to="/" className="flex items-center"> 
                    <div className=" -scale-x-100">
                        <RightArrow size="sm" />
                        </div>
                        <div>
                         <p>back to home</p>
                        </div>
                </Link>
            </div>
            <div className=" bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="bg-purple-600 text-white p-4 border-3 border-purple-500 hover:bg-purple-500 shadow-3xl hover:shadow-purple-700 hover:-translate-y-0.5 transition-all duration-300 rounded-xl">
                        <BookIcon />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Teacher Portal
                    </h1>
                    <p className="text-sm text-gray-500 max-w-[320px]">
                        Welcome back! Please sign in to access your teaching dashboard.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <Input
                            placeholder="Enter your username"
                            type="text"
                            icon={<StudenIcon />} reference={usernameRef}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input
                            placeholder="Enter your password"
                            type="password"
                            icon={<StudenIcon />} reference={passwordRef}
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2 text-gray-600">
                            <input
                                type="checkbox"
                                className="accent-purple-600"
                            />
                            Remember me
                        </label>
                        <Link
                            to="#"
                            className="text-purple-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>

                    </div>
                    <Button
                        text="Sign in to Dashboard"
                        variant="purple" onclick={handleOnClick}
                    />

                </div>
                <p className="text-xs text-center text-gray-500">
                    Need help accessing your account? Contact your school administrator.
                </p>
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-gray-600 text-center">
                        Other portals
                    </p>
                    <div className="flex gap-8 ">

                        <Link to="/admin/login" className="w-full">
                            <Button text="Admin Portal" variant="transparent" />
                        </Link>

                        <Link to="/student/login" className="w-full">
                            <Button text="Student Portal" variant="transparent" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}