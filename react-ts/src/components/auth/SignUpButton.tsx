// simple buttont that opens the sign up modal
// allows entry of phone number + confirmation w/ immediate sign-in
// can close and autoclose when confirmed
// button contained
// show when not signed in

import { BottomNavigationAction } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

export default function SignUpButton() {
  return (
    <BottomNavigationAction
      label="Sign Up"
      showLabel
      icon={<PersonAddAltIcon />}
    />
  );
}
