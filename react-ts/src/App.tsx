import { Box } from "@mui/material";
import "./App.css";
import BalanceLineChart from "./components/charts/BalanceLineChart";
import AuthBar from "./components/AuthBar";
import ActivitySection from "./components/activityUI/ActivitySection";

function App() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <BalanceLineChart />
      <ActivitySection />
      <AuthBar />
    </Box>
  );
}

export default App;
