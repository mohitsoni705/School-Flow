import type { ReactElement } from "react"

interface ButtonProps{
    text:string,
    frontIcon?:ReactElement,
    endIcon?:ReactElement,
    variant:"orange"|"green"|"yellow"
    onclick?:()=>void
}
const variants ={
    "orange":" bg-orange-600 hover:bg-orange-500 ",
    "green":" bg-emerald-600 hover:bg-emerald-500 ",
    "yellow":" bg-amber-600 hover:bg-amber-500 "
}

const defaultStyle = "gap-2 flex items-center py-3 px-8 border rounded-lg text-white font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5  ";

export const Button=({text, frontIcon ,endIcon , variant , onclick}:ButtonProps)=>{
   return(
    <button className={`${defaultStyle} ${variants[variant]}`}  onClick={onclick} >
    {frontIcon}
    {text}
    {endIcon}
    </button>
   )
}