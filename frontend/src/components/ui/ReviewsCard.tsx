

interface ReviewCardProps {
    stars?:number,
    reviewText:string,
    person:string,
    profession:string
}

export const ReviewCard =({stars,reviewText , person , profession}:ReviewCardProps)=>{
    return (
        <div className=" bg-stone-800 rounded-lg border border-stone-700 p-8 flex flex-col">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-gray-300">
                {reviewText}
            </div>
            <hr className="text-stone-600"/>
            <div>
                <div className="text-lg text-white font-bold"> 
                {person}
                </div>
                <div className="text-amber-500 font-semibold">
                    {profession}
                </div>
            </div>
        </div>
    )
}