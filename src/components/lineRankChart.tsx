import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { formatDate } from "../utils/formatters";

const LineRankChart = ({ data }) => {
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
      <YAxis
        type="number"
        domain={[1, 8]}
        reversed={true}
        tickCount={8}
        interval={0}
      />
      <Tooltip />
      <Legend />
      <Line
        name="winnig team"
        type="monotone"
        dataKey="winningRank"
        stroke="#E6D700"
        strokeWidth={2}
        activeDot={{ r: 6 }}
      />
      <Line
        name="your team"
        type="monotone"
        dataKey="yourRank"
        stroke="#807A00"
        strokeWidth={2}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
};

export default LineRankChart;
