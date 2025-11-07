import type { TimeSeries } from "../types/TimeSeries";
import calculateEWMA from "./calculateEWMA";

export default function calculateWorkloadBalance(
  dailyLoads: TimeSeries
): TimeSeries {
  // calc 30 day EWMA
  // calc 7 day EWMA
  // for each day in 7 & 30
  // return 7/30 EWMAs
  const thirtyDayEWMA = calculateEWMA(30, dailyLoads);
  const sevenDayEWMA = calculateEWMA(7, dailyLoads);

  if (thirtyDayEWMA.dates.length() != sevenDayEWMA.dates.length()) {
    throw Error;
  }

  const workloadBalance: TimeSeries = { dates: [], values: [] };
  for (let i = 0; i < thirtyDayEWMA.dates.length(); i++) {
    const workloadValue = sevenDayEWMA.values[i] / thirtyDayEWMA.values[i];
    workloadBalance.values.push(workloadValue);

    const workloadDate = workloadBalance.dates[i];
    workloadBalance.dates.push(workloadDate);
  }
  return workloadBalance;
}
