import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  Slider,
  TextField,
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
        />
        <TextField
          label="Activity Name"
          fullWidth
          margin="normal"
          value={activityData?.activityName || ""}
          onChange={(e) => updateField("activityName", e.target.value)}
        />
        <div style={{ marginTop: "16px" }}>
          <label>Performance</label>
          <Rating
            value={activityData?.performance || 0}
            onChange={(_, newValue) => {
              if (newValue !== null) {
                updateField("performance", newValue);
              }
            }}
          />
        </div>
        <div style={{ marginTop: "24px" }}>
          <label>Fingers Intensity</label>
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
        </div>
        <div style={{ marginTop: "24px" }}>
          <label>Upper Body Intensity</label>
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
        </div>
        <div style={{ marginTop: "24px" }}>
          <label>Lower Body Intensity</label>
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
        </div>
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
