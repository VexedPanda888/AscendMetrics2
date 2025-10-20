import { Box } from "@mui/material";
import "./App.css";
import BalanceLineChart from "./components/charts/BalanceLineChart";
import SimpleBottomNavigation from "./components/NavigationBar";
import { ActivitySection } from "./components/activityUI/ActivitySection";

function App() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <BalanceLineChart />
      <ActivitySection />
      <SimpleBottomNavigation />
    </Box>
  );
}

export default App;
