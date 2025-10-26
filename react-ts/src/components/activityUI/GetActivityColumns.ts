import type { GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../../types/ActivityData";
import dayjs from "dayjs";

// Each breakpoint (a key) matches with a fixed screen width (a value):
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export function GetActivityColumns(
  breakpoint: string
): GridColDef<ActivityData[][number]>[] {
  switch (breakpoint) {
    case "xs":
      return [
        {
          field: "date",
          headerName: "Date",
          width: 100,
          type: "date",
          valueFormatter: (value: string) => {
            return dayjs(value).format("M/D/YYYY");
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
    case "sm":
      return [
        {
          field: "date",
          headerName: "Date",
          width: 100,
          type: "date",
          valueFormatter: (value: string) => {
            return dayjs(value).format("M/D/YYYY");
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
      ];
    case "md":
      return [
        {
          field: "date",
          headerName: "Date",
          width: 100,
          type: "date",
          valueFormatter: (value: string) => {
            return dayjs(value).format("M/D/YYYY");
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
          field: "performance",
          headerName: "Performance",
          type: "number",
          width: 130,
          editable: true,
        },
      ];
    case "lg":
      return [
        {
          field: "date",
          headerName: "Date",
          width: 100,
          type: "date",
          valueFormatter: (value: string) => {
            return dayjs(value).format("M/D/YYYY");
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
          field: "performance",
          headerName: "Performance",
          type: "number",
          width: 130,
          editable: true,
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
      ];
    default:
      return [
        {
          field: "date",
          headerName: "Date",
          width: 100,
          type: "date",
          valueFormatter: (value: string) => {
            return dayjs(value).format("M/D/YYYY");
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
          field: "performance",
          headerName: "Performance",
          type: "number",
          width: 130,
          editable: true,
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
      ];
  }
}
