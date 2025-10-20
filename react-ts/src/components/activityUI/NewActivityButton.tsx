import { Button } from "@mui/material";

interface NewActivityButtonProps {
  onClick: () => void;
}

export default function NewActivityButton({ onClick }: NewActivityButtonProps) {
  return (
    <Button variant="contained" fullWidth onClick={onClick}>
      New Activity
    </Button>
  );
}
