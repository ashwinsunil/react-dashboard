import { Box} from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/Piechart";

const Pie = () => {


  return (
    <Box >
      
      <Box height="25vh" padding={1} >
        <Header title="Customers" subtitle="Customers that buy products" />
          <PieChart />
        <Box sx={{
          textAlign: "center"
        }}>
          <Header  title="65%" subtitle="New Customers"/>
        </Box>    
      </Box>
    </Box>
  );
};

export default Pie;