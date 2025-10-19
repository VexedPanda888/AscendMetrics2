import { Modal, Box } from "@mui/material";
import { SignInAuthScreen } from "@firebase-ui/react";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SignInModal({ open, onClose }: SignInModalProps) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="sign-in-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <SignInAuthScreen />
      </Box>
    </Modal>
  );
}
