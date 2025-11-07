import type { TimeSeries } from "../types/TimeSeries";

/**
 * calculates an exponentially weighted moving average.
 */
export default function calculateEWMA(
  numberOfDaysInWindow: number,
  timeSeries: TimeSeries
): TimeSeries {
  const alpha = 2 / (numberOfDaysInWindow + 1);
  const ewmaDates = timeSeries.dates;
  const ewmaValues = [];
  ewmaValues[0] = timeSeries.values[0];
  for (let i = 1; i < timeSeries.dates.length; i++) {
    ewmaValues[i] =
      ewmaValues[i - 1] * (1 - alpha) + timeSeries.values[i] * alpha;
  }
  const ewma = { dates: ewmaDates, values: ewmaValues };
  console.log(ewma);
  return ewma;
}
