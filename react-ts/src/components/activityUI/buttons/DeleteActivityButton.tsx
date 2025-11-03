import { Button } from "@mui/material";

interface DeleteActivityButtonProps {
  onClick?: () => void;
}

function DeleteActivityButton({ onClick }: DeleteActivityButtonProps) {
  return (
    <Button variant="contained" onClick={onClick} color="error">
      Delete / Cancel
    </Button>
  );
}

export default DeleteActivityButton;
