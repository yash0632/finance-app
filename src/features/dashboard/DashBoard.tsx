import DashBoardHeader from "./DashBoardHeader"
import NeedleChart from "./NeedleChart";
import MaxAnalysis from "./MaxAnalysis";

import NormalAnalysis from "./NormalAnalysis";
import LoadProfileBarChart from "./BarChart";

import ColorConfig from "./HeatMap";

import DashBoardLineChart from "./LineChart";

export default function DashBoard() {
  return (
    <div className="h-full w-full bg-[#f2f2f2] grid grid-cols-[1fr] grid-rows-[auto_1fr] p-2 gap-y-2 ">
        <DashBoardHeader/>
      <div className="w-full h-full grid grid-cols-[1fr_1fr_2fr]  gap-4 grid-rows-[1fr_1fr_0.5fr_auto]">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3">
            <NeedleChart/>
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2">
            <MaxAnalysis value={203.22} grade={"A"} status={"good"}/>
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3">
            <NormalAnalysis value={203.22} grade={"A"} status={"good"}/>
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-4">
            <LoadProfileBarChart/>
        </div>
        <div className="col-start-1 col-end-3 row-start-3 row-end-5">
            <DashBoardLineChart/>
        </div>
        <div className="col-start-3 col-end-4 row-start-4 row-end-4">
            <ColorConfig/>
        </div>
        

      </div>
    </div>
  );
}
