import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { formatDate, formatTooltip } from "../utils/formatters";

const LineProgressChart = ({ data }) => {
  return (
    <LineChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={formatDate} />
      <YAxis tickCount={8} />
      <Tooltip formatter={formatTooltip} />
      <Legend />
      <Line
        name="tour distance"
        type="monotone"
        dataKey="cumulatedDistance"
        stroke="#E6D700"
        activeDot={{ r: 6 }}
      />
      <Line
        name="team distance"
        type="monotone"
        dataKey="teamCumulated"
        stroke="#807A00"
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
};

export default LineProgressChart;
