import type { GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../../types/ActivityData";

export function GetActivityColumns(): GridColDef<ActivityData[][number]>[] {
  return [
    {
      field: "date",
      headerName: "Date",
      width: 100,
      type: "date",
      valueFormatter: (value: Date) => {
        return value.toLocaleDateString();
      },
    },
    {
      field: "activityName",
      headerName: "Activity",
      width: 200,
      editable: true,
      type: "string",
    },
  ];
}
