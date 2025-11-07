export interface TimeSeries {
  dates: string[]; // a sorted array of dates; old to new
  values: number[]; // a sorted array corresponding to dates
}
