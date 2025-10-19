import { BottomNavigationAction } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

interface SignOutButtonProps {
  onSignOut: () => Promise<void>;
}

export default function SignOutButton({ onSignOut }: SignOutButtonProps) {
  return (
    <BottomNavigationAction
      label="Sign Out"
      showLabel
      icon={<LogoutIcon />}
      onClick={onSignOut}
    />
  );
}
