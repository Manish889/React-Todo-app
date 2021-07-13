import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={props.label}
          value={dataPoint.value}
          maxValue={null}
          label={props.label}
        />
      ))}
    </div>
  );
};

export default Chart;
