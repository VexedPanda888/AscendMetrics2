import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import SaveActivityButton from "./buttons/SaveActivityButton";
import DeleteActivityButton from "./buttons/DeleteActivityButton";
import type { ActivityData } from "../../types/ActivityData";
import {
  createActivityData,
  deleteActivityData,
  updateActivityData,
} from "../../firebase/database";

interface ActivityWritingDialogProps {
  open: boolean;
  onClose: () => void;
  activityData: ActivityData | null;
  setActivityData: (data: ActivityData) => void;
}

function ActivityWritingDialog({
  open,
  onClose,
  activityData,
  setActivityData,
}: ActivityWritingDialogProps) {
  function handleSave(activityData: ActivityData) {
    if (activityData.id === "temp-id") {
      createActivityData(activityData)
        .then((newId: string) => {
          setActivityData({ ...activityData, id: newId });
          console.log("Activity data saved successfully with ID:", newId);
        })
        .catch((error) => {
          console.error("Error saving activity data:", error);
        });
    } else {
      updateActivityData(activityData);
      console.log("Activity data updated successfully.");
    }
  }

  function onSaveClick(activityData: ActivityData | null) {
    if (activityData) {
      handleSave(activityData);
    }
    onClose();
  }

  function handleDelete(id: string) {
    deleteActivityData(id)
      .then(() => {
        console.log("Activity data deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting activity data:", error);
      });
  }

  function onDeleteClick(id: string | null) {
    if (id) {
      handleDelete(id);
    }
    onClose();
  }

  function updateField<K extends keyof ActivityData>(
    field: K,
    value: ActivityData[K]
  ) {
    if (activityData) {
      setActivityData({ ...activityData, [field]: value });
    }
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Create or Edit Activity</DialogTitle>
      <DialogContent>
        <DatePicker
          label="Date"
          value={activityData?.date ? dayjs(activityData.date) : null}
          onChange={(newDate: Dayjs | null) => {
            if (newDate) {
              updateField("date", newDate.toISOString());
            }
          }}
          sx={{ marginTop: 1, width: "100%" }}
        />
        <TextField
          label="Activity Name"
          fullWidth
          value={activityData?.activityName || ""}
          onChange={(e) => updateField("activityName", e.target.value)}
          sx={{ marginTop: 2 }}
        />
        <TextField
          label="Duration (in minutes)"
          fullWidth
          value={activityData?.activityDuration || ""}
          onChange={(e) =>
            updateField("activityDuration", Number(e.target.value))
          }
          sx={{ marginTop: 2 }}
        />
        <Typography component="legend">Performance (1-5)</Typography>
        <Rating
          value={activityData?.performance || 0}
          onChange={(_, newValue) => {
            if (newValue !== null) {
              updateField("performance", newValue);
            }
          }}
          size="large"
        />
        <Typography component="legend">
          Fingers and Forearms Intensity (0-5)
        </Typography>
        <Slider
          shiftStep={1}
          step={1}
          marks
          min={0}
          max={5}
          value={activityData?.fingersIntensity || 0}
          onChange={(_, newValue) => {
            if (typeof newValue === "number") {
              updateField("fingersIntensity", newValue);
            }
          }}
        />
        <Typography component="legend">Upper Body Intensity (0-5)</Typography>
        <Slider
          shiftStep={1}
          step={1}
          marks
          min={0}
          max={5}
          value={activityData?.upperIntensity || 0}
          onChange={(_, newValue) => {
            if (typeof newValue === "number") {
              updateField("upperIntensity", newValue);
            }
          }}
        />
        <Typography component="legend">Lower Body Intensity (0-5)</Typography>
        <Slider
          shiftStep={1}
          step={1}
          marks
          min={0}
          max={5}
          value={activityData?.lowerIntensity || 0}
          onChange={(_, newValue) => {
            if (typeof newValue === "number") {
              updateField("lowerIntensity", newValue);
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <DeleteActivityButton
          onClick={() => onDeleteClick(activityData ? activityData.id : null)}
        />
        <SaveActivityButton onClick={() => onSaveClick(activityData)} />
      </DialogActions>
    </Dialog>
  );
}

export default ActivityWritingDialog;
