import { useTheme } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(2024, 0, i + 1); // January 2024
  return {
    date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    fullDate: date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    "workload balance": Math.random() * 2, // Random value between 0 and 2
  };
});

const WorkloadBalanceAreaChart = () => {
  const theme = useTheme();

  return (
    <AreaChart
      style={{
        width: "100%",
        maxHeight: "55vh",
        aspectRatio: 1.618,
        fontFamily: theme.typography.fontFamily,
      }}
      responsive
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 10,
      }}
    >
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff0000" stopOpacity={0.8} />
          <stop offset="25%" stopColor="#ff8800" stopOpacity={0.8} />
          <stop offset="37.5%" stopColor="#ffff00" stopOpacity={0.8} />
          <stop offset="50%" stopColor="#00ff00" stopOpacity={0.8} />
          <stop offset="75%" stopColor="#0088ff" stopOpacity={0.8} />
          <stop offset="100%" stopColor="#0088ff" stopOpacity={0.8} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" interval="preserveStartEnd" minTickGap={30} />
      <YAxis
        width="auto"
        domain={[0, 2]}
        tick={{
          fill: theme.palette.text.secondary,
          fontSize: theme.typography.body2.fontSize,
          fontFamily: theme.typography.fontFamily,
        }}
      />
      <Tooltip
        labelFormatter={(value, payload) => {
          if (payload && payload[0]) {
            return payload[0].payload.fullDate;
          }
          return value;
        }}
        formatter={(value: number) => value.toFixed(2)}
      />
      <Area
        type="monotone"
        dataKey="workload balance"
        fill="url(#colorGradient)"
      />
    </AreaChart>
  );
};

export default WorkloadBalanceAreaChart;
