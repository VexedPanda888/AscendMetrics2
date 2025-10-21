import { Button } from "@mui/material";

interface SaveActivityButtonProps {
  onClick?: () => void;
}

export default function SaveActivityButton({
  onClick,
}: SaveActivityButtonProps) {
  return (
    <Button variant="contained" onClick={onClick}>
      Save
    </Button>
  );
}
