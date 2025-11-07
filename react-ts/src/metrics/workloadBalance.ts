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

  const workloadBalance: TimeSeries = { dates: [], values: [] };
  for (let i = 0; i < thirtyDayEWMA.dates.length; i++) {
    let workloadValue = 0;
    if (thirtyDayEWMA.values[i] > 0) {
      workloadValue = sevenDayEWMA.values[i] / thirtyDayEWMA.values[i];
    }
    workloadBalance.values.push(workloadValue);
  }
  workloadBalance.dates = thirtyDayEWMA.dates;
  console.log(workloadBalance);
  return workloadBalance;
}
