import {useState} from 'react';

export default function DashBoardHeader(){
    const [reload,setReload] = useState(false);

    if(reload){
        window.location.reload();
    }

    return(
        <div className="w-full  h-auto flex justify-between items-center bg-[#f2f2f2]">
            <div className='flex items-center gap-x-2'>
            <ThreeCircle/>
            <div className='text-blue-800 font-bold'>
                Dashboard {'>>'} Class A - Current Analysis
            </div>
            </div>
            
            <div className='flex items-center justify-evenly gap-x-2'>
                <button onClick={()=>{
                    setReload(!reload)
                }}
                style={{
                    "backgroundColor":"white"
                }}>
                    <ReloadSvg/>
                </button>
                <button onClick={()=>{
                    //update this logic
                }}
                style={{
                    "backgroundColor":"white"
                }}
                >
                    <FilterIcon/>
                </button>
                <button onClick={()=>{
                    //update this logic
                }}
                style={{
                    "backgroundColor":"white"
                }}
                >
                    <SolidLine/>
                </button>
                <button
                className="bg-cyan-950 text-white px-2 py-1 rounded-md"
                 onClick={()=>{
                    //update this logic
                }} 
                style={{
                    "backgroundColor":"#053345"
                }}
                >
                    +  Create
                </button>
            </div>

        </div>
    )
}

export function ReloadSvg(){
    return(
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#053345"  strokeWidth="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-reload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" /></svg>
        </div>
    )
}

function FilterIcon(){
    return (
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#053345"  strokeWidth="2"  strokeLinecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-filter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" /></svg>
        </div>
    )
}

function SolidLine(){
    return(
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#053345"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-line-dotted"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v.01" /><path d="M8 12v.01" /><path d="M12 12v.01" /><path d="M16 12v.01" /><path d="M20 12v.01" /></svg>
        </div>
    )
}

function ThreeCircle(){
    return (
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  stroke="#053345"   height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-circles"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M17.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M12 2a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /></svg>
        </div>
    )
}