import { Line, Pie } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

type LineProps = {
  type: "line";
  data: ChartData<"line">;
  options?: ChartOptions<"line">;
};

type PieProps = {
  type: "pie";
  data: ChartData<"pie">;
  options?: ChartOptions<"pie">;
};

type GenericChartProps = LineProps | PieProps;

const GenericChart = (props: GenericChartProps) => {
  switch (props.type) {
    case "line":
      return <Line data={props.data} options={props.options} />;
    case "pie":
      return <Pie data={props.data} options={props.options} />;
    default:
      return null;
  }
};

export default GenericChart;
