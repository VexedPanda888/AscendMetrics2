import { Button } from "@mui/material";

interface NewActivityButtonProps {
  onClick: () => void;
}

function NewActivityButton({ onClick }: NewActivityButtonProps) {
  return (
    <Button variant="contained" fullWidth onClick={onClick}>
      New Activity
    </Button>
  );
}

export default NewActivityButton;
