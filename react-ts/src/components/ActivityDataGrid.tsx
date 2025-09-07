import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../types/ActivityData";

export default function ActivityDataGrid() {
  const columns: GridColDef<(typeof rows)[number]>[] = [
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

  const rows: ActivityData[] = [
    {
      id: 1,
      date: new Date(2024, 6, 8), // July 8, 2024 (month is 0-indexed)
      activityName: "Warm-Up",
      activityDuration: 30,
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 2,
      date: new Date(2024, 6, 8),
      activityName: "PumpCap/AnCap",
      activityDuration: 45,
      upperIntensity: 6,
      fingersIntensity: 6,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 3,
      date: new Date(2024, 6, 13),
      activityName: "Bouldering",
      activityDuration: 15,
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 4,
      date: new Date(2024, 6, 13),
      activityName: "Performance",
      activityDuration: 120,
      upperIntensity: 6,
      fingersIntensity: 6,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 5,
      date: new Date(2024, 6, 15),
      activityName: "Warm-Up",
      activityDuration: 30,
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 6,
      date: new Date(2024, 6, 15),
      activityName: "Bouldering",
      activityDuration: 90,
      upperIntensity: 8,
      fingersIntensity: 9,
      lowerIntensity: 2,
      performance: 5,
    },
    {
      id: 7,
      date: new Date(2024, 6, 17),
      activityName: "Warm-Up",
      activityDuration: 45,
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 8,
      date: new Date(2024, 6, 17),
      activityName: "PumpCap/AnCap",
      activityDuration: 45,
      upperIntensity: 7,
      fingersIntensity: 7,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 9,
      date: new Date(2024, 6, 20),
      activityName: "Warm-Up",
      activityDuration: 30,
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 10,
      date: new Date(2024, 6, 20),
      activityName: "Bouldering",
      activityDuration: 120,
      upperIntensity: 7.5,
      fingersIntensity: 7.5,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 11,
      date: new Date(2024, 6, 22),
      activityName: "Warm-Up",
      activityDuration: 30,
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 12,
      date: new Date(2024, 6, 22),
      activityName: "Bouldering",
      activityDuration: 60,
      upperIntensity: 8.5,
      fingersIntensity: 7,
      lowerIntensity: 2,
      performance: 5,
    },
    {
      id: 13,
      date: new Date(2024, 6, 22),
      activityName: "Onsight",
      activityDuration: 15,
      upperIntensity: 8,
      fingersIntensity: 7,
      lowerIntensity: 2,
      performance: 5,
    },
    {
      id: 14,
      date: new Date(2024, 6, 22),
      activityName: "PumpCap/AnCap",
      activityDuration: 30,
      upperIntensity: 8.5,
      fingersIntensity: 6,
      lowerIntensity: 2,
      performance: 5,
    },
    {
      id: 15,
      date: new Date(2024, 6, 25),
      activityName: "Warm-Up",
      activityDuration: 30,
      upperIntensity: 5,
      fingersIntensity: 6,
      lowerIntensity: 3,
      performance: 3,
    },
    {
      id: 16,
      date: new Date(2024, 6, 25),
      activityName: "Bouldering",
      activityDuration: 75,
      upperIntensity: 7.5,
      fingersIntensity: 8.5,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 17,
      date: new Date(2024, 6, 25),
      activityName: "Strength",
      activityDuration: 15,
      upperIntensity: 0,
      fingersIntensity: 9.5,
      lowerIntensity: 0,
      performance: 5,
    },
  ];

  return (
    <DataGrid
      sx={{
        "& .MuiDataGrid-columnHeaderTitle": {
          whiteSpace: "normal",
          lineHeight: "normal",
        },
        "& .MuiDataGrid-columnHeader": {
          // Forced to use important since overriding inline styles
          height: "unset !important",
        },
        "& .MuiDataGrid-columnHeaders": {
          // Forced to use important since overriding inline styles
          maxHeight: "168px !important",
        },
      }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
}
