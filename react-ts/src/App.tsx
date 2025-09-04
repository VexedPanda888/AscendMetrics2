import { Box } from "@mui/material";
import "./App.css";
import ActivityDataGrid from "./components/ActivityDataGrid";
import BalanceLineChart from "./components/charts/BalanceLineChart";

function App() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <BalanceLineChart />
      <ActivityDataGrid />
    </Box>
  );
}

export default App;
