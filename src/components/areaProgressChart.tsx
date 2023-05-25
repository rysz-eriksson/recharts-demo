import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { formatDate, formatTooltip } from "../utils/formatters";

const AreaProgressChart = ({ data }) => {
  return (
    <AreaChart
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
      <defs>
        <linearGradient id="colorcumulatedDistance" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#E6D700" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#E6D700" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorteamCumulated" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#807A00" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#807A00" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={formatDate} />
      <YAxis tickCount={8} />
      <Tooltip formatter={formatTooltip} />
      <Legend />
      <Area
        name="tour distance"
        type="monotone"
        dataKey="cumulatedDistance"
        stroke="#E6D700"
        activeDot={{ r: 6 }}
        fill="url(#colorcumulatedDistance)"
      />
      <Area
        name="team distance"
        type="monotone"
        dataKey="teamCumulated"
        stroke="#807A00"
        activeDot={{ r: 6 }}
        fill="url(#colorteamCumulated)"
      />
    </AreaChart>
  );
};

export default AreaProgressChart;
