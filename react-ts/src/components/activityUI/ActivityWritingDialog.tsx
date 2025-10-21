import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import SaveActivityButton from "./buttons/SaveActivityButton";
import DeleteActivityButton from "./buttons/DeleteActivityButton";

interface ActivityWritingDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ActivityWritingDialog({
  open,
  onClose,
}: ActivityWritingDialogProps) {
  return (
    <Dialog open={open}>
      <DialogTitle>Create or Edit Activity</DialogTitle>
      <DialogContent>
        <Typography>Activity writing form goes here.</Typography>
      </DialogContent>
      <DialogActions>
        <DeleteActivityButton onClick={onClose} />
        <SaveActivityButton onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
}
