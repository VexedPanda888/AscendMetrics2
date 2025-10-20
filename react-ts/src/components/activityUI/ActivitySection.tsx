import { Box, Button } from "@mui/material";
import ActivityDataGrid from "./ActivityDataGrid";
import demoRows from "./DemoActivityData";
import NewActivityButton from "./NewActivityButton";
import ActivityWritingModal from "./ActivityWritingModal";
import { useState } from "react";
import type { GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../../types/ActivityData";
import EditIcon from "@mui/icons-material/Edit";

export function ActivitySection() {
  const [open, setOpen] = useState(false);

  // here begins code required for the data grid. its placement here was a necessity due to state management for the modal
  const activityGridColumns: GridColDef<ActivityData[][number]>[] = [
    {
      field: "editButton",
      headerName: "Edit",
      width: 55,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: RenderEditButton,
    },
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

  function RenderEditButton() {
    return (
      <strong>
        <Button
          sx={{ width: 30, height: 30, minWidth: 30 }}
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  }
  // end of data grid required code

  return (
    <Box>
      <NewActivityButton onClick={() => setOpen(true)} />
      <ActivityWritingModal open={open} onClose={() => setOpen(false)} />
      <ActivityDataGrid columns={activityGridColumns} rows={demoRows} />
    </Box>
  );
}
