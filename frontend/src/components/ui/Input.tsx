import type { ReactElement } from "react"

interface InputProps{
    placeholder: string,
    icon: ReactElement,
    type:string,
    reference?:any
}

export const Input = ({ placeholder, icon ,type , reference }: InputProps) => {
    return (
        <div className="relative flex items-center">
            
            <div className="absolute left-4 flex items-center text-slate-500">
                {icon}
            </div>

            <input
                type={type}
                placeholder={placeholder}
                className="w-full h-[45px] leading-[30px] 
                pl-12 pr-4
                rounded-lg
                bg-slate-50
                text-[#0d0c22]
                border-slate-200
                outline-none border-3
                placeholder:text-slate-400
                focus:bg-white  focus:border-purple-500
                hover:bg-white "
                ref={reference}
            />

        </div>
    )
}