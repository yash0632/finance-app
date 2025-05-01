export default function UnitsHeader(){
    return(
        <div className="w-full flex justify-between items-center p-4 bg-white rounded-lg">
            <div className="text-xl text-shadow-gray-400">
                Department Wise Energy
            </div>
            <div className="flex 
            items-center justify-evenly gap-x-4 ">
                <select className="border w-40 border-gray-300 rounded-md p-2">
                    <option value="elmeasure">Elmeasue</option>
                    <option value="elmeasure2">Elmeasue 2</option>
                </select>
                <IncreaseSize/>
                <MoonIcon/>
                <div className="p-2 flex justify-center items-center bg-gray-600 rounded-full">
                    esm
                </div>
            </div>
        </div>
    )
}

function IncreaseSize(){
    return (
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-zoom-pan"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17 17l-2.5 -2.5" /><path d="M10 4l2 -2l2 2" /><path d="M20 10l2 2l-2 2" /><path d="M4 10l-2 2l2 2" /><path d="M10 20l2 2l2 -2" /></svg>
        </div>
    )
}

function MoonIcon(){
    return(
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
        </div>
    )
}