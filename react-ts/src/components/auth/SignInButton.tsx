import { useState } from "react";
import { BottomNavigationAction } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import SignInModal from "./SignInModal";

export default function SignInButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BottomNavigationAction
        label="Sign In"
        showLabel
        icon={<LoginIcon />}
        onClick={() => setIsModalOpen(true)}
      />
      <SignInModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
