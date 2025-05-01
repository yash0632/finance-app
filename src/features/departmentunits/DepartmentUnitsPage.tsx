import UnitsHeader from "./UnitsHeader";
import UnitsPieChart from "./UnitsPieChart";
import UnitsValueBox from "./UnitsValueBox";
import UnitUkgConversionBox from "./UnitUkgBox";
import {useState} from "react"

export default function DepartmentUnitsPage() {
    const [incomerData,setIncomerData] = useState([
        ["Task", "Hours per Day"],
        ["Incomer", 9],
        ["GenSet", 2],
        ["Solar", 2],
        ["SharingAdd", 2],
        ["SharingSub", 7],
    ]) as [[string,string|number][],(incomerData:[string,string|number][])=>void];

    const [DepartmentData,setDepartmentData] = useState([
        ["Task", "Hours per Day"],
        ["Carding", 5],
        ["Blow Room", 20],
        ["VXL", 13],
        ["Lighting", 4],
        ["Spinning", 1],
        ["AutoConer",2],
        ["Plant",1]
    ]) as [[string,string|number][],(incomerData:[string,string|number][])=>void];

    
    const [unitChecked,setUnitChecked] = useState(true);
    return (
        <div className="w-full h-full grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_1fr_1fr_auto] bg-[#f2f2f2] p-2 gap-2 text-black font-semibold">
            <div className="col-start-1 col-end-5 row-start-1 row-end-2">
                <UnitsHeader/>
            </div>
            <div className="col-start-1 col-end-2  row-start-2 row-end-3">
                <UnitsValueBox title={"Overall UKG"} value={78.537}/>
            </div>
            <div className="col-start-2 col-end-3  row-start-2 row-end-3">
                <UnitsValueBox title={"AVG COUNT"} value={18.07}/>
            </div>
            <div className="col-start-3 col-end-4  row-start-2 row-end-3">
                <UnitsValueBox title={"AVG COUNT UKG"} value={1.807}/>
            </div>
            <div className="col-start-4 col-end-5  row-start-2 row-end-3">
                <UnitsValueBox title={"UKG/COUNT"} value={4.346}/>
            </div>
            <div className="col-start-1 col-end-2  row-start-3 row-end-4">
                <UnitsValueBox title={"ENERGY"} value={52710}/>
            </div>
            <div className="col-start-2 col-end-3  row-start-3 row-end-4">
                <UnitsValueBox title={"40S UKG"} value={1.269}/>
            </div>
            <div className="col-start-3 col-end-4  row-start-3 row-end-4">
                <UnitsValueBox title={"40S E-UKG"} value={1.269}/>
            </div>
            <div className="col-start-4 col-end-5  row-start-3 row-end-4">
                <UnitUkgConversionBox unitChecked={unitChecked} setUnitChecked={setUnitChecked}/>
            </div>
            <div className="col-start-1 col-end-3 row-start-4 row-end-5">
                <UnitsPieChart data={incomerData} title={"Incomer"} setData={setIncomerData}/>
            </div>
            <div className="col-start-3 col-end-5 row-start-4 row-end-5">
                <UnitsPieChart data={DepartmentData} title={"Department"} setData={setDepartmentData}/>
            </div>
        </div>
    )
}