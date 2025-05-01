import { Chart } from "react-google-charts";

interface PieChartComponentProps{
    dataFormat:[string,string|number][],
}


export default function PieChartComponent(
    {
        dataFormat
    }:PieChartComponentProps
){
    const data = dataFormat;
    
      
      return (
        <Chart
          chartType="PieChart"
          data={data}
          
          width={"100%"}
          height={"300px"}
        />
      );
}