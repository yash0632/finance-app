
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function UnitUkgConversionBox({
        unitChecked,
        setUnitChecked
    }:{
        unitChecked:boolean,
        setUnitChecked:(unitChecked:boolean) => void
    }
){
    console.log(unitChecked)


    return(
        <div className="w-full h-full bg-white p-4 flex flex-col justify-between min-w-[300px]">
            <div className="text-md font-semibold text-black">
                {"Tags"}
            </div>
            <div className=
            " flex justify-around items-center px-">
                <div>
                    <div>
                        {unitChecked==true?<Checkbox
                            {...label}
                            checked={unitChecked}
                        />:<Checkbox {...label}
                            onClick={()=>setUnitChecked(true)}
                        />}
                    </div>
                    <div>
                        UNIT
                    </div>
                </div>
                <div>
                    <div>
                        {unitChecked==false?<Checkbox
                            {...label}
                            checked={!unitChecked}
                        />:<Checkbox {...label}
                            onClick={()=>{
                                setUnitChecked(false);
                            }}
                        />}
                    </div>
                    <div>
                        UKG
                    </div>
                </div>
                
            </div>
        </div>
    )
}