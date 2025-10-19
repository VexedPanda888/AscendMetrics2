/**
 * This activity data type represents a single activity entry with varied intensity and performance metrics.
 * This type is used primarily for displaying activity data in data grids.
 */
export interface ActivityData {
  id: number;
  date: Date;
  activityName: string;
  activityDuration: number; // in minutes
  upperIntensity: number; // out of 5
  fingersIntensity: number; // out of 5
  lowerIntensity: number; // out of 5
  performance: number; // out of 5
}
