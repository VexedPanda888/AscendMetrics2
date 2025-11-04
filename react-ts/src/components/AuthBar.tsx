import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SignInButton from "./auth/SignInButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Paper from "@mui/material/Paper";
import SignOutButton from "./auth/SignOutButton";
import { auth } from "../firebase/firebase";
import { signOut } from "@firebase/auth";
import { useUser } from "../firebase/hooks";
import SignInModal from "./auth/SignInModal";
import { useState } from "react";

/**
 *
 * @returns A bottom navigation bar with interactions conditional on sign-in state
 */
function AuthBar() {
  const user = useUser();
  const [isModalOpen, setIsModalOpen] = useState(true);

  async function onSignOut() {
    await signOut(auth);
  }

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        {user
          ? [
              <SignOutButton key={"signout"} onSignOut={onSignOut} />,
              <BottomNavigationAction
                key={"settings"}
                label="Settings"
                showLabel
                icon={<SettingsIcon />}
              />,
            ]
          : [
              <SignInButton
                key={"signin"}
                onClick={() => setIsModalOpen(true)}
              />,
              <SignInModal
                key={"signin-modal"}
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />,
            ]}
      </BottomNavigation>
    </Paper>
  );
}

export default AuthBar;
