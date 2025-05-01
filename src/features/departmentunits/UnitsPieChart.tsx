import PieChartComponent from "../../component/PieChart"
export default function UnitsPieChart({
        data,
        title
    }:{
        data:[string,string|number][],
        title:string,
        setData?:(data:[string,string|number][])=>void
    }
){
    return(
        <div className="flex flex-col h-auto w-full p-4 bg-white">
            <div className="flex justify-between items-center text-black font-semibold
            text-lg
            border-b-1 border-neutral-300">
                <div>
                    {title}
                </div>
                <div className="border-neutral-500 rounded-md border-1 p-2 cursor-pointer">
                    Pie
                </div>
            </div>
            <div>
                <PieChartComponent dataFormat={data} />
            </div>

        </div>
    )
}