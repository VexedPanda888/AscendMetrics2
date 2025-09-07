import type { GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../../types/ActivityData";

const activityGridColumns: GridColDef<ActivityData[][number]>[] = [
  { field: "id", headerName: "ID", width: 80 },
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
  {
    field: "activityDuration",
    headerName: "Duration",
    type: "number",
    width: 100,
    editable: true,
    valueFormatter: (value: number) => {
      const hours = Math.floor(value / 60);
      const minutes = value % 60;
      return hours > 0
        ? `${hours}:${minutes.toString().padStart(2, "0")}`
        : `${minutes} min.`;
    },
  },
  {
    field: "upperIntensity",
    headerName: "Upper and Core Intensity",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "fingersIntensity",
    headerName: "Fingers and Forearms Intensity",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "lowerIntensity",
    headerName: "Lower Intensity",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "performance",
    headerName: "Performance",
    type: "number",
    width: 130,
    editable: true,
  },
];

export default activityGridColumns;
