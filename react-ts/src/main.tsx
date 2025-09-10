import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FirebaseConfigProvider from "./firebase/FirebaseConfigProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirebaseConfigProvider>
      <App />
    </FirebaseConfigProvider>
  </StrictMode>
);
