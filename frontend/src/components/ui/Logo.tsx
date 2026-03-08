import { LogoIcon } from "../../icon/LogoIcon"

export const Logo=()=>{
    return(
        <div className="group flex flex-row gap-2 cursor-pointer bg-stone-800 w-min p-2 transition-all items-center duration-300 hover:shadow-amber-500">
            <div className="text-white border rounded-md border-orange-600 group-hover:shadow-amber-600 shadow-2xl p-1 bg-orange-600 group-hover:-translate-y-0.5 group-hover:shadow-amber-600 duration-300 transition-all"><LogoIcon/></div>
            <div className="text-amber-600 font-bold text-xl group-hover:text-amber-500  shadow-2xl transition-all duration-300 ">SchoolFlow</div>
        </div>
    )
}