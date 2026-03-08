import type { ReactElement } from "react"

interface ButtonProps{
    text:string,
    frontIcon?:ReactElement,
    endIcon?:ReactElement,
    variant:"orange"|"green"|"yellow"|"purple"|"transparent"
    onclick?:()=>void
}
const variants ={
    "orange":" bg-orange-600 hover:bg-orange-500 border-orange-600 shadow-orange-500/50 text-white font-semibold ",
    "green":" bg-emerald-600 hover:bg-emerald-500 border-emerald-600 shadow-emerald-500/50 text-white font-semibold ",
    "yellow":" bg-amber-600 hover:bg-amber-500 border-amber-600 shadow-amber-500/50 text-white font-semibold ",
    "purple":"bg-purple-600 hover:bg-purple-500 border-purple-600 shadow-purple-500/50 text-white font-semibold ",
    "transparent":" text-gray-500 border-gray-300 text-sm hover:bg-gray-50 "
}

const defaultStyle = "gap-2 flex items-center justify-center py-2 px-6 border rounded-lg   shadow-lg transition-all duration-300 hover:-translate-y-0.5  ";

export const Button=({text, frontIcon ,endIcon , variant , onclick}:ButtonProps)=>{
   return(
    <button className={`${defaultStyle} ${variants[variant]}`}  onClick={onclick} >
    {frontIcon}
    {text}
    {endIcon}
    </button>
   )
}