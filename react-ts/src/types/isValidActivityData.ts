import type { ActivityData } from "./ActivityData";

function isValidActivityData(data: ActivityData): data is ActivityData {
  return (
    typeof data.id === "number" &&
    data.date instanceof Date &&
    typeof data.activityName === "string" &&
    typeof data.activityDuration === "number" &&
    typeof data.upperIntensity === "number" &&
    typeof data.fingersIntensity === "number" &&
    typeof data.lowerIntensity === "number" &&
    typeof data.performance === "number"
  );
}

export default isValidActivityData;
