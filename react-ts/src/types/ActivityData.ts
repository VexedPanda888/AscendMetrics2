/**
 * This activity data type represents a single activity entry with varied intensity and performance metrics.
 * This type is used primarily for displaying activity data in data grids.
 */
export interface ActivityData {
  id: string;
  userId: string;
  date: Date;
  activityName: string;
  activityDuration: number; // in minutes
  upperIntensity: number; // 0 to 5
  fingersIntensity: number; // 0 to 5
  lowerIntensity: number; // 0 to 5
  performance: number; // 0 to 5
}
