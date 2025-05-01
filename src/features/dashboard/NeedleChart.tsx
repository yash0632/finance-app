
import { PieChart, Pie, Cell } from 'recharts';
import CircleIcon from '../../component/Circle';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 80, color: '#ff0000' },
  { name: 'B', value: 45, color: '#00ff00' },
  { name: 'C', value: 25, color: '#0000ff' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;



const needle = (value:number, data: {
  name: string;
  value: number;
  color: string;
}[], cx:number, cy:number, iR:number, oR:number, color:string) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

function NeedleChartExample(){

  
    return (
      <PieChart width={250} height={165}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={80}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#d0d000')}
      </PieChart>
    );
  
}

export default function NeedleChart(){
  return(
    <div className="w-full h-full flex flex-col items-center justify-center bg-white text-black py-4 rounded-2xl">
      <div className="flex justify-between w-full h-auto px-8 font-semibold text-black ">
        <div className='text-lg'>
          Arrow
        </div>
        <div className='flex gap-x-2 items-center'> 
          <CircleIcon/>
          <div className='text-lg'>
            Live
          </div>
        </div>
        
      </div>
      <div className="w-full">
        <NeedleChartExample/>
      </div>
      <div className="flex justify-center w-full h-auto p-2 font-semibold text-black ">
          0 <FireIcon/>
      </div>
      <div className='font-semibold text-lg'>
          Power Consumption
      </div>
      

    </div>
  )
}


function FireIcon(){
  return(
    <div>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-flame"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" /></svg>
    </div>
  )
}
