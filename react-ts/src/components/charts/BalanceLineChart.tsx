import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";

const dateFormatter = Intl.DateTimeFormat(undefined, {
  month: "2-digit",
  day: "2-digit",
});
const oneDay = 24 * 60 * 60 * 1000; // in milliseconds

const length = 50;
const initialFirstData = Array.from<number>({ length }).map(
  (_, __, array) => (array.at(-1) ?? 0) + randBetween(-100, 500)
);
const initialSecondData = Array.from<number>({ length }).map(
  (_, __, array) => (array.at(-1) ?? 0) + randBetween(-500, 100)
);

export default function BalanceLineChart() {
  return (
    <Box sx={{ width: "100%" }}>
      <LineChart
        height={300}
        skipAnimation
        series={[
          { data: initialSecondData, showMark: false },
          { data: initialFirstData, showMark: false },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: Array.from({ length }).map(
              (_, i) => new Date(new Date(2000, 0, 0).getTime() + i * oneDay)
            ),
            valueFormatter: (value: Date) => dateFormatter.format(value),
          },
        ]}
        yAxis={[{ width: 50 }]}
        margin={{ right: 24 }}
      />
    </Box>
  );
}

function randBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
