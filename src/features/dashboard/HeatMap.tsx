
import { interpolateReds } from 'd3-scale-chromatic';
import { Heatmap } from '@mui/x-charts-pro/Heatmap';
import { HeatmapValueType } from '@mui/x-charts-pro/models';
import { ReloadSvg } from './DashBoardHeader';

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: '54vh',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: '48vh',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: '42vh',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: '36vh',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: '30vh',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: '24vh',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: '18vh',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: '12vh',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: '6vh',
  },
  
];

const data = dataset.flatMap(
  ({ london, paris, newYork, seoul }, monthIndex): HeatmapValueType[] => [
    [0, monthIndex, london],
    [1, monthIndex, paris],
    [2, monthIndex, newYork],
    [3, monthIndex, seoul],
  ],
);

const xData = ['London', 'Paris', 'NewYork', 'Seoul'];
const yData = dataset.flatMap(({ month }) => month);

export default function ColorConfig() {
  return (
    <div className='h-full w-full bg-white p-4 rounded-xl'>
        <div className="flex justify-between items-center px-4">
           <div className='text-lg font-semibold text-black'>
            <div>
                Load
            </div>
            <div>
                Today
            </div>
           </div>
           <div className='text-black flex items-center justify-between'>
                <ReloadSvg/> 
           </div>
        </div>
    <Heatmap
      height={175}
      width={600}
      xAxis={[{ data: xData }]}
      yAxis={[{ data: yData, width: 80 }]}
      series={[{ data }]}
      zAxis={[
        {
          min: 20,
          max: 300,
          colorMap: {
            type: 'continuous',
            color: interpolateReds,
          },
        },
      ]}
    />
    </div>
  );
}
