import { BottomNavigationAction } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

interface SignInButtonProps {
  onClick: () => void;
}

export default function SignInButton({ onClick }: SignInButtonProps) {
  return (
    <>
      <BottomNavigationAction
        label="Sign In"
        showLabel
        icon={<LoginIcon />}
        onClick={onClick}
      />
    </>
  );
}
