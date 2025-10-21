import { Box, Button } from "@mui/material";
import ActivityDataGrid from "./ActivityDataGrid";
import { demoRows } from "./DemoActivityData";
import NewActivityButton from "./buttons/NewActivityButton";
import ActivityWritingDialog from "./ActivityWritingDialog";
import { useEffect, useState } from "react";
import type { GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../../types/ActivityData";
import EditIcon from "@mui/icons-material/Edit";
import { GetActivityColumns } from "./GetActivityColumns";

function ActivitySection() {
  const [open, setOpen] = useState(false);
  // here begins code required for the data grid. its placement here was a necessity due to state management for the modal
  const [breakpoint, setBreakpoint] = useState("xs");

  useEffect(() => {
    const mediaQueries = [
      { name: "xs", query: "(max-width: 639px)" },
      { name: "sm", query: "(min-width: 640px) and (max-width: 767px)" },
      { name: "md", query: "(min-width: 768px) and (max-width: 1023px)" },
      { name: "lg", query: "(min-width: 1024px) and (max-width: 1279px)" },
      { name: "xl", query: "(min-width: 1280px)" },
    ];

    const mediaQueryLists = mediaQueries.map(({ name, query }) => {
      const mql = window.matchMedia(query);
      const handler = (e: MediaQueryListEvent) => {
        if (e.matches) setBreakpoint(name);
      };
      mql.addEventListener("change", handler);
      if (mql.matches) setBreakpoint(name);
      return { mql, handler };
    });

    return () => {
      mediaQueryLists.forEach(({ mql, handler }) => {
        mql.removeEventListener("change", handler);
      });
    };
  }, []);

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
    ...GetActivityColumns(breakpoint),
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
      <ActivityWritingDialog open={open} onClose={() => setOpen(false)} />
      <ActivityDataGrid columns={activityGridColumns} rows={demoRows} />
    </Box>
  );
}

export default ActivitySection;
