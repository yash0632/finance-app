
import { LineChart } from '@mui/x-charts/LineChart';

export  function LineChartComponent(){
    return (
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10,12,16,18,20] }]}
          series={[
            { curve: "linear", data: [1, 5, 2, 6, 3, 9.3,6, 3, 7, 9.5] },
            { curve: "linear", data: [6, 3, 7, 9.5, 4, 2,6, 4, 7, 13.5] },
            { curve: "linear", data: [6, 4, 7, 13.5, 4, 2,7, 4, 7, 1.5] },
            { curve: "linear", data: [7, 4, 7, 1.5, 5, 2,3,7,9,10] },
          ]}
          height={275}
        />
    );
}

export default function DashBoardLineChart(){
  return(
    <div className="w-full h-full flex flex-col items-center justify-center bg-white text-black py-4 rounded-2xl ">
      <div className="flex justify-between w-full h-auto px-8 font-semibold text-black ">
        <div className='text-lg'>
          Line Chart
        </div>
        <div className='text-lg'>
          Live
        </div>
      </div>
      <div className="w-full">
        <LineChartComponent/>
      </div>
      <div className='font-semibold text-lg'>
          Power Consumption
      </div>
    </div>
  )
}

