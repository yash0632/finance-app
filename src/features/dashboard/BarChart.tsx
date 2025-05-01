
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import CircleIcon from '../../component/Circle';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarChartComponent = () => {

  
    return (
      <ResponsiveContainer width="100%" height="70%">
        <BarChart width={150} height={40} data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              
              tickFormatter={(value) => `${2*value+1}`}
              tick={{ fontSize: 10 }}
              axisLine={{ stroke: '#E0E0E0' }}
              
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              tickFormatter={(value) => `${5*value/1000}`}
              axisLine={{ stroke: '#E0E0E0' }}
              tickLine={false}
            />
            <Tooltip
              formatter={(value) => [`${value} kW`, 'Load']}
              labelFormatter={(label) => `Hour: ${label}:00`}
            />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}

const LoadProfileBarChart = () => {
    return (
        <div className="h-full w-full flex flex-col p-4  rounded-xl bg-white">
            <div className='flex justify-between items-center w-full'>
                <div className="flex flex-col items-senter justify-center text-black font-semibold text-xl">
                    <div className='text-xl'>Load Profile</div>
                    <div className='text-sm'>This month</div>
                </div>
                <div>
                    <div className='flex gap-x-2 items-center justify-evenly text-black'>
                        <CircleIcon/>
                        <div>Live</div>
                    </div>
                </div>

            </div>
            
            <BarChartComponent/>

            <div className='text-lg font-bold text-black text-center'>
                Power Consumption is a hard process to calculate
            </div>
            
        </div>
    )
}

export default LoadProfileBarChart;