import type { ReactElement } from "react";

interface FeatureCardsProps{
    icon:ReactElement,
    headText:string,
    insideText:string
}

const defaultStyle = "";

export const FeatureCards=({icon , headText , insideText}:FeatureCardsProps)=>{
    return(
        <div className="group  bg-stone-800 text-white border-stone-700 border rounded-xl p-8 flex flex-col relative transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl relative">
            <div className="border rounded-lg bg-orange-500/50 w-max border-orange-500/50 text-amber-400 p-1 flex items-center">
                {icon}
            </div>
            <div className="font-semibold mb-3 text-white text-xl">
                <h1>{headText}</h1>
            </div>
            <div className="text-gray-300 ">
                {insideText}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-all flex items-center text-amber-600 gap-2 text-sm  font-medium ">
                Learn More 
                {icon}
            </div>
        </div>
    )
}