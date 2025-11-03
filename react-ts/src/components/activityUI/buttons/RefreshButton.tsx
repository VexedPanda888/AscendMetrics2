import { Button, Tooltip } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";

interface RefreshButtonProps {
  onClick: () => void;
}

function RefreshButton({ onClick }: RefreshButtonProps) {
  return (
    <Tooltip title="Click to reload with newest data" arrow>
      <Button variant={"contained"} onClick={onClick} fullWidth>
        <SyncIcon />
      </Button>
    </Tooltip>
  );
}

export default RefreshButton;
