import { type GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../../types/ActivityData";
import { lazy, Suspense } from "react";
import { Skeleton } from "@mui/material";
const DataGrid = lazy(() =>
  import("@mui/x-data-grid").then((m) => ({ default: m.DataGrid }))
);

interface ActivityDataGridProps {
  columns: readonly GridColDef[];
  rows: ActivityData[];
}

const ActivityDataGrid: React.FC<ActivityDataGridProps> = ({
  columns,
  rows,
}) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <DataGrid
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
        disableRowSelectionOnClick
      />
    </Suspense>
  );
};

export default ActivityDataGrid;
