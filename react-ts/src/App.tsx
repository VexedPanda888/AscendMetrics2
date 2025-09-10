import { Box } from "@mui/material";
import "./App.css";
import ActivityDataGrid from "./components/data-grid/ActivityDataGrid";
import BalanceLineChart from "./components/charts/BalanceLineChart";
import activityGridColumns from "./components/data-grid/ActivityColumns";
import demoRows from "./components/data-grid/DemoActivityData";
import SimpleBottomNavigation from "./components/NavigationBar";

function App() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <BalanceLineChart />
      <ActivityDataGrid columns={activityGridColumns} rows={demoRows} />
      <SimpleBottomNavigation />
    </Box>
  );
}

export default App;
