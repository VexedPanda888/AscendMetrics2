import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import SaveActivityButton from "./SaveActivityButton";
import DeleteActivityButton from "./DeleteActivityButton";

interface ActivityWritingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ActivityWritingModal({
  open,
  onClose,
}: ActivityWritingModalProps) {
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
