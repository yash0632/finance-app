          

import CircleIcon from "../../component/Circle";


const NormalAnalysis = ({ grade,status }: { value?: number,grade:string,status:string }) => {
    const colorMap:Record<string,string> = {
        good: "bg-green-500",
        warning: "bg-yellow-500",
        error: "bg-red-500",
      };
      
    
      const bgColor = colorMap[status] || colorMap.good;
  return (
    <div className="w-full h-full rounded-lg flex flex-col p-4 bg-white justify-between">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold text-black ">Normal Analysis</div>
        <div className="flex gap-x-2 items-center">
            <CircleIcon/>
        <div className="text-lg font-semibold text-black "> Live</div>
        </div>
        
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black font-semibold">
          <div>POWER NEW</div>
          {/* <div className="text-2xl font-bold">{value} kW</div> */}
        </div>
        <div
          className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-2xl`}
        >
          {grade}
        </div>
      </div>
    </div>
  );
};

export default NormalAnalysis;

