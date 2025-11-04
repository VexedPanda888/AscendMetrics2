import { Box, Button } from "@mui/material";
import ActivityDataGrid from "./ActivityDataGrid";
import NewActivityButton from "./buttons/NewActivityButton";
import ActivityWritingDialog from "./ActivityWritingDialog";
import { useEffect, useState } from "react";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import type { ActivityData } from "../../types/ActivityData";
import EditIcon from "@mui/icons-material/Edit";
import { GetActivityColumns } from "./GetActivityColumns";
import { useUser } from "../../firebase/hooks";
import dayjs from "dayjs";
import { getActivityDataForUser } from "../../firebase/database";

function ActivitySection() {
  const [open, setOpen] = useState(false);
  const [activityData, setActivityData] = useState<ActivityData | null>(null);
  // here begins code required for the data grid. its placement here was a necessity due to state management for the modal
  const [breakpoint, setBreakpoint] = useState("xs");
  const user = useUser();
  const [allActivities, setAllActivities] = useState<ActivityData[]>([]);
  // so the ideal case here is that the section fetches the activity data for the user and passes it to the data grid
  // that behavior should occur on mount and whenever the user changes or the data is modified (add/edit/delete)
  // the other components are responsible for triggering those changes, be it deletion, addition, or editing

  // this useEffect handles window resizing. the data grid alters displayed columns depending on viewport size
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

  const fetchActivityDataForUser = () => {
    if (user) {
      getActivityDataForUser(user.uid).then((newActivities) => {
        setAllActivities(newActivities);
      });
    } else {
      setAllActivities([]);
    }
  };
  // this useEffect handles user data fetching once logged in or out
  useEffect(fetchActivityDataForUser, [user]);

  function RenderEditButton(params: GridRenderCellParams) {
    return (
      <strong>
        <Button
          sx={{ width: 30, height: 30, minWidth: 30 }}
          variant="contained"
          onClick={() => {
            setActivityData(params.row);
            setOpen(true);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  }
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

  // end of data grid required code

  return (
    <Box>
      <NewActivityButton
        onClick={() => {
          setOpen(true);
          setActivityData({
            id: "temp-id",
            userId: user ? user.uid : "unknown",
            date: dayjs().toISOString(),
            activityName: "",
            activityDuration: 0,
            upperIntensity: 0,
            fingersIntensity: 0,
            lowerIntensity: 0,
            performance: 0,
          });
        }}
      />

      <ActivityWritingDialog
        open={open}
        onClose={() => {
          setOpen(false);
          fetchActivityDataForUser();
        }}
        activityData={activityData}
        setActivityData={setActivityData}
      />
      <ActivityDataGrid columns={activityGridColumns} rows={allActivities} />
    </Box>
  );
}

export default ActivitySection;
