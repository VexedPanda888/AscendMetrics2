import { Button } from "@mui/material";

interface DeleteActivityButtonProps {
  onClick?: () => void;
}

export default function DeleteActivityButton({
  onClick,
}: DeleteActivityButtonProps) {
  return (
    <Button variant="contained" onClick={onClick} color="error">
      Delete
    </Button>
  );
}
