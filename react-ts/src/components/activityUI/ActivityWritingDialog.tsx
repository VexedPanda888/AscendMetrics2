import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import SaveActivityButton from "./buttons/SaveActivityButton";
import DeleteActivityButton from "./buttons/DeleteActivityButton";
import type { ActivityData } from "../../types/ActivityData";
import { useState } from "react";
import {
  createActivityData,
  deleteActivityData,
} from "../../firebase/database";

interface ActivityWritingDialogProps {
  open: boolean;
  onClose: () => void;
}

function ActivityWritingDialog({ open, onClose }: ActivityWritingDialogProps) {
  // in addition to closing when clicked, this button should also save the activity data entered in the form
  // let's start with a manually created activity data object
  // then we can test the ability to save it to the database
  const [dummyData, setDummyData] = useState({
    id: "temp-id",
    userId: "demo-user",
    date: new Date(),
    activityName: "Demo Activity",
    activityDuration: 30,
    performance: 5,
    upperIntensity: 5,
    fingersIntensity: 5,
    lowerIntensity: 5,
  });

  function handleSave(activityData: ActivityData) {
    if (activityData.id === "temp-id") {
      createActivityData(activityData)
        .then(() => {
          console.log("Activity data saved successfully.");
        })
        .catch((error) => {
          console.error("Error saving activity data:", error);
        });
    }
  }

  function onSaveClick(activityData: ActivityData) {
    handleSave(activityData);
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

  function onDeleteClick(id: string) {
    handleDelete(id);
    onClose();
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Create or Edit Activity</DialogTitle>
      <DialogContent>
        <Typography>Activity writing form goes here.</Typography>
      </DialogContent>
      <DialogActions>
        <DeleteActivityButton onClick={() => onDeleteClick(dummyData.id)} />
        <SaveActivityButton onClick={() => onSaveClick(dummyData)} />
      </DialogActions>
    </Dialog>
  );
}

export default ActivityWritingDialog;
