import { Box, useTheme} from "@mui/material";
import { DataGrid, GridToolbarQuickFilter  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";

const Product = () => {
    function QuickSearchToolbar() {
        return (
          <Box
            sx={{
              background: colors.grey[400],
              width: "20%",
              p: 0.5,
              pb: 0,
              color:"black"
              
            }}
          >
            <GridToolbarQuickFilter sx={{text: "green"}} />
          </Box>
        );
      }
      
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
                    
            </Box>
        </Box>
      

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          background:colors.grey[100],
          border: "none",
          color:colors.grey[900],
          "& .MuiDataGrid-root": {
            border: "none",
            color: colors.grey[900]
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            color: colors.grey[900]
          },
          "& .name-column--cell": {
            border: "none",
            color: colors.grey[900],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.grey[100],
            color:colors.grey[700],
            borderBottom: "solid",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.grey[100],
            border: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            
            backgroundColor: colors.grey[100],
            border: "none",
            color: colors.grey[900]
          },
          "& .MuiInputBase-root":{
            color:colors.grey[800]
          }
         
        }}
      >
        <DataGrid title="Product Sell"
            slots={{ toolbar: QuickSearchToolbar }}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Product;