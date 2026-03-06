
interface StatsCardProps{
    text:string,
    number:string
}
const defaultStyle = " bg-stone-800 text-white p-6  rounded-lg border border-stone-700/50 w-max text-center shadow-xl ";
export const Statscard=({text , number}:StatsCardProps)=>{
    return (
        <div className={`${defaultStyle}`}>
            <div className="font-bold text-3xl mb-2">{number}</div>
            <div className="text-sm font-medium text-gray-300 ">{text}</div>
        </div>
    )
}