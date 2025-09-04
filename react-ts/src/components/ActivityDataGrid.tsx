import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../types/ActivityData";

export default function ActivityDataGrid() {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "date", headerName: "Date", width: 100, type: "string" },
    {
      field: "activityName",
      headerName: "Activity",
      width: 100,
      editable: true,
      type: "string",
    },
    {
      field: "activityDuration",
      headerName: "Duration",
      type: "string",
      width: 100,
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
      date: "7/8/24",
      activityName: "Warm-Up",
      activityDuration: "0:30",
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 2,
      date: "7/8/24",
      activityName: "PumpCap/AnCap",
      activityDuration: "0:45",
      upperIntensity: 6,
      fingersIntensity: 6,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 3,
      date: "7/13/24",
      activityName: "Bouldering",
      activityDuration: "0:15",
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 4,
      date: "7/13/24",
      activityName: "Performance",
      activityDuration: "2:00",
      upperIntensity: 6,
      fingersIntensity: 6,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 5,
      date: "7/15/24",
      activityName: "Warm-Up",
      activityDuration: "0:30",
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 6,
      date: "7/15/24",
      activityName: "Bouldering",
      activityDuration: "1:30",
      upperIntensity: 8,
      fingersIntensity: 9,
      lowerIntensity: 2,
      performance: 5,
    },
    {
      id: 7,
      date: "7/17/24",
      activityName: "Warm-Up",
      activityDuration: "0:45",
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 8,
      date: "7/17/24",
      activityName: "PumpCap/AnCap",
      activityDuration: "0:45",
      upperIntensity: 7,
      fingersIntensity: 7,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 9,
      date: "7/20/24",
      activityName: "Warm-Up",
      activityDuration: "0:30",
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 10,
      date: "7/20/24",
      activityName: "Bouldering",
      activityDuration: "2:00",
      upperIntensity: 7.5,
      fingersIntensity: 7.5,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 11,
      date: "7/22/24",
      activityName: "Warm-Up",
      activityDuration: "0:30",
      upperIntensity: 5,
      fingersIntensity: 5,
      lowerIntensity: 2,
      performance: 3,
    },
    {
      id: 12,
      date: "7/22/24",
      activityName: "Bouldering",
      activityDuration: "1:00",
      upperIntensity: 8.5,
      fingersIntensity: 7,
      lowerIntensity: 2,
      performance: 5,
    },
    {
      id: 13,
      date: "7/22/24",
      activityName: "Onsight",
      activityDuration: "0:15",
      upperIntensity: 8,
      fingersIntensity: 7,
      lowerIntensity: 2,
      performance: 5,
    },
    {
      id: 14,
      date: "7/22/24",
      activityName: "PumpCap/AnCap",
      activityDuration: "0:30",
      upperIntensity: 8.5,
      fingersIntensity: 6,
      lowerIntensity: 2,
      performance: 5,
    },
    {
      id: 15,
      date: "7/25/24",
      activityName: "Warm-Up",
      activityDuration: "0:30",
      upperIntensity: 5,
      fingersIntensity: 6,
      lowerIntensity: 3,
      performance: 3,
    },
    {
      id: 16,
      date: "7/25/24",
      activityName: "Bouldering",
      activityDuration: "1:15",
      upperIntensity: 7.5,
      fingersIntensity: 8.5,
      lowerIntensity: 2,
      performance: 4,
    },
    {
      id: 17,
      date: "7/25/24",
      activityName: "Strength",
      activityDuration: "0:15",
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
