import type { ActivityData } from "./ActivityData";
import dayjs from "dayjs";

function isValidActivityData(data: ActivityData): data is ActivityData {
  return (
    typeof data.userId === "string" &&
    typeof data.date === "string" &&
    dayjs(data.date).isValid() &&
    typeof data.activityName === "string" &&
    typeof data.activityDuration === "number" &&
    typeof data.upperIntensity === "number" &&
    typeof data.fingersIntensity === "number" &&
    typeof data.lowerIntensity === "number" &&
    typeof data.performance === "number"
  );
}

export default isValidActivityData;
