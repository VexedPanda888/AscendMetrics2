/**
 * This activity data type represents a single activity entry with varied intensity and performance metrics.
 * This type is used primarily for displaying activity data in data grids.
 * The date field stores ISO 8601 date strings for compatibility with dayjs and Firebase.
 */
export interface ActivityData {
  id: string;
  userId: string;
  date: string; // ISO 8601 date string
  activityName: string;
  activityDuration: number; // in minutes
  upperIntensity: number; // 0 to 5
  fingersIntensity: number; // 0 to 5
  lowerIntensity: number; // 0 to 5
  performance: number; // 0 to 5
}
