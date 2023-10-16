import { Box, useTheme, IconButton, InputBase } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import SearchIcon from '@mui/icons-material/Search';

const Product = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Product Name",
      flex: 3,
      cellClassName: "name-column--cell",
    },
    {
      field: "Stock",
      headerName: "Stock",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "TotalSales",
      headerName: "Total Sales",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
    <Box>
    <Header title="Product Sell" subtitle="" />
            <Box 
                    alignItems="right"
                    width="12%"
                    display="flex" 
                    backgroundColor={colors.grey[400]} 
                    color={colors.grey[600]} 
                    borderRadius="3px"   
                >
                    <IconButton type="button">
                        <SearchIcon sx={{color:colors.grey[900], mr:0}}/>
                    </IconButton>
                    <InputBase  sx={{ml: 2, flex:2, color:colors.grey[700]}} placeholder = "Search" />
                    
            </Box>
        </Box>
      

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            color: colors.grey[900]
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            color: colors.grey[900]
          },
          "& .name-column--cell": {
            color: colors.grey[900],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.grey[100],
            color:colors.grey[700],
            borderBottom: "solid",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.grey[100],
            
          },
          "& .MuiDataGrid-footerContainer": {
            borderBottom: "none",
            backgroundColor: colors.grey[100],
            color: colors.grey[900]
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid  rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Product;