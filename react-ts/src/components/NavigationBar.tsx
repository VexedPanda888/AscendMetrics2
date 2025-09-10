import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import Paper from "@mui/material/Paper";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const isSignedIn = true;

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {isSignedIn ? (
          <>
            <BottomNavigationAction
              label="Sign In"
              showLabel
              icon={<LoginIcon />}
            />
            <BottomNavigationAction
              label="Sign Up"
              showLabel
              icon={<PersonAddAltIcon />}
            />
          </>
        ) : (
          <>
            <BottomNavigationAction
              label="Sign Out"
              showLabel
              icon={<LogoutIcon />}
            />
          </>
        )}
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
