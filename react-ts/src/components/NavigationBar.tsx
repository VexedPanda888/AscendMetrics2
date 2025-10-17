import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SignInButton from "./auth/SignInButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Paper from "@mui/material/Paper";
import SignOutButton from "./auth/SignOutButton";

/**
 *
 * @returns A bottom navigation bar with interactions conditional on sign-in state
 */
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const isSignedIn = false;

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        {isSignedIn ? (
          <>
            <SignOutButton />
            <BottomNavigationAction
              label="Settings"
              showLabel
              icon={<SettingsIcon />}
            />
          </>
        ) : (
          <>
            <SignInButton />
          </>
        )}
      </BottomNavigation>
    </Paper>
  );
}
