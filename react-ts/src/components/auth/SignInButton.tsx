// Button that opens the sign in modal
// button contained
// show if not signed in useState = sign-in-status
// open modal if clicked onEffect ()=>

import { BottomNavigationAction } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function SignInButton() {
  return (
    <BottomNavigationAction label="Sign In" showLabel icon={<LoginIcon />} />
  );
}
