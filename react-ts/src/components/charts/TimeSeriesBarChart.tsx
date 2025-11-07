import { lazy } from "react";
import type { TimeSeries } from "../../types/TimeSeries";
const BarChart = lazy(() =>
  import("@mui/x-charts").then((m) => ({ default: m.BarChart }))
);
interface TimeSeriesBarChartProps {
  timeSeries?: TimeSeries;
}

const sampleTimeSeries: TimeSeries = {
  dates: [
    "2024-01-01T00:00:00.000Z",
    "2024-01-02T00:00:00.000Z",
    "2024-01-03T00:00:00.000Z",
    "2024-01-04T00:00:00.000Z",
    "2024-01-05T00:00:00.000Z",
    "2024-01-06T00:00:00.000Z",
    "2024-01-07T00:00:00.000Z",
  ],
  values: [10, 25, 15, 30, 20, 35, 18],
};

export default function TimeSeriesBarChart({
  timeSeries = sampleTimeSeries,
}: TimeSeriesBarChartProps) {
  // Format dates to be more readable (e.g., "Jan 15")
  const formattedDates = timeSeries.dates.map((date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  return (
    <div style={{ width: "100%", height: "50%" }}>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: formattedDates,
            label: "Date",
          },
        ]}
        series={[
          {
            data: timeSeries.values,
            label: "Load",
          },
        ]}
        height={400}
      />
    </div>
  );
}
