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
  );
};

export default ActivityDataGrid;
