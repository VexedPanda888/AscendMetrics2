import { Button } from "@mui/material";

interface SaveActivityButtonProps {
  onClick?: () => void;
}

function SaveActivityButton({ onClick }: SaveActivityButtonProps) {
  return (
    <Button variant="contained" onClick={onClick}>
      Save
    </Button>
  );
}

export default SaveActivityButton;
