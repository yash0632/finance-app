interface UnitsValueBoxProps{
    title:string,
    value:number
}

export default function UnitsValueBox(
    {title,value}:UnitsValueBoxProps
){
    return(
        <div className="w-full h-full bg-white p-4 flex flex-col items-start justify-between min-w-[300px]">
            <div className="text-md font-semibold text-black">
                {title}
            </div>
            <div className="text-3xl font-extrabold text-blue-800">
                {value}
            </div>
        </div>
    )
}