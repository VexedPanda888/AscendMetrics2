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
