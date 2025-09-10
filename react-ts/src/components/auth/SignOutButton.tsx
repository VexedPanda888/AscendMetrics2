// simple button that signs out and clears out user data
// button outlined
// hide when not signed in
// click triggers log out logic - which triggers visibility logic + data clear logic

import { BottomNavigationAction } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SignOutButton() {
  return (
    <BottomNavigationAction label="Sign Out" showLabel icon={<LogoutIcon />} />
  );
}
