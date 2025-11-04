import { Box } from "@mui/material";
import "./App.css";
import WorkloadBalanceAreaChart from "./components/charts/WorkloadBalanceAreaChart";
import AuthBar from "./components/AuthBar";
import ActivitySection from "./components/activityUI/ActivitySection";

function App() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <WorkloadBalanceAreaChart />
      <ActivitySection />
      <AuthBar />
    </Box>
  );
}

export default App;
