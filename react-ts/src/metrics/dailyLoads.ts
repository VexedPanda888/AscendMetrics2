import dayjs from "dayjs";
import type { ActivityData } from "../types/ActivityData";
import type { TimeSeries } from "../types/TimeSeries";

export default function calculateDailyLoads(
  allActivityData: ActivityData[]
): TimeSeries {
  const dates: string[] = [];
  const today = dayjs().startOf("day");
  const startDate = today.subtract(29, "day"); // 29 days ago + today = 30 days total

  for (let i = 0; i < 30; i++) {
    dates.push(startDate.add(i, "day").toISOString());
  }

  const values: number[] = new Array(30).fill(0);

  for (const activity of allActivityData) {
    const averageIntensity =
      (activity.upperIntensity +
        activity.fingersIntensity +
        activity.lowerIntensity) /
      3;

    const load = averageIntensity * activity.activityDuration;

    const activityDate = dayjs(activity.date).startOf("day");
    const daysDiff = activityDate.diff(startDate, "day");

    if (daysDiff >= 0 && daysDiff < 30) {
      values[daysDiff] += load;
    }
  }

  const dailyLoads: TimeSeries = { dates: dates, values: values };
  return dailyLoads;
}
