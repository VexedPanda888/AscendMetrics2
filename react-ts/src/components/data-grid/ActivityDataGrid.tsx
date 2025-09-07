import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { ActivityData } from "../../types/ActivityData";

interface ActivityDataGridProps {
  columns: readonly GridColDef[];
  rows: ActivityData[];
}

const ActivityDataGrid: React.FC<ActivityDataGridProps> = ({
  columns,
  rows,
}) => {
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
};

export default ActivityDataGrid;
