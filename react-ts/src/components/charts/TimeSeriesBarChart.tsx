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

  const colors = timeSeries.values.map((value) => {
    if (value <= 0) return "purple";
    if (value <= 0.5) {
      // Interpolate between purple and blue
      const t = value / 0.5;
      return `rgb(${Math.round(128 - 128 * t)}, 0, ${Math.round(
        128 + 127 * t
      )})`;
    }
    if (value <= 1) {
      // Interpolate between blue and green
      const t = (value - 0.5) / 0.5;
      return `rgb(0, ${Math.round(128 * t)}, ${Math.round(255 - 255 * t)})`;
    }
    if (value <= 1.25) {
      // Interpolate between green and yellow
      const t = (value - 1) / 0.25;
      return `rgb(${Math.round(255 * t)}, 128, 0)`;
    }
    if (value <= 1.5) {
      // Interpolate between yellow and orange
      const t = (value - 1.25) / 0.25;
      return `rgb(255, ${Math.round(128 + 37 * t)}, 0)`;
    }
    if (value < 2) {
      // Interpolate between orange and red
      const t = (value - 1.5) / 0.5;
      return `rgb(255, ${Math.round(165 - 165 * t)}, 0)`;
    }
    return "red";
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
        yAxis={[
          {
            colorMap: {
              type: "ordinal",
              values: timeSeries.values, // The actual values from your data
              colors: colors, // Corresponding colors
            },
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
