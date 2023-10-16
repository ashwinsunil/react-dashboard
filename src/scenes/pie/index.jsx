import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/Piechart";
import { tokens } from "../../theme";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box >
      
      <Box height="25vh" >
      <Header title="Customers" subtitle="Customers that buy products" />
        <PieChart />
      <Header title="65%" subtitle="New Customers"/>
              
      </Box>
    </Box>
  );
};

export default Pie;