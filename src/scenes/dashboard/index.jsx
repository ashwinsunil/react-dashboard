
import { Box, IconButton, useTheme, Grid  } from "@mui/material";
import { tokens } from "../../theme";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from "../../components/Logo"
import Bar from "../bar";
import Pie from "../pie";
import Product from "../products";
import Topbar from "../../global/Topbar";


const Dashboard= ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    
    return (
        <Grid container marginLeft="249px">
            <Grid container  zIndex="0">
                <Grid item overflow="hidden" xs={12}>
                    <Topbar/>
                </Grid>
            </Grid>
            
            <Grid container marginBottom="25px"  display="flex" position="relative" marginLeft="16px" >

                <Grid item borderRadius="2%" xs={12} md={2.7} backgroundColor={colors.grey[100]} marginRight="8px" color="black" >
                    <Box justifyContent="center">
                        <IconButton sx={{ alignItems: "center"}}>
                            <MonetizationOnOutlinedIcon   sx={{ fontSize: 100, color: colors.greenAccent[500], 
                                    background: colors.greenAccent[100],
                                    borderRadius: "50%"}}/>    
                            <Logo sub="Earning" title="$198k" subtitle="37.8% this month" />
                        </IconButton>
                        
                    </Box>
                    
                    

                </Grid>
                <Grid item borderRadius="2%" xs={12} md={2.7} backgroundColor={colors.grey[100]} marginRight="8px" color="black">
                    <IconButton>
                        <ArticleOutlinedIcon   sx={{ fontSize: 100, color: colors.purple[500], 
                                background: colors.purple[200],
                                borderRadius: "50%"}}/>
                        <Logo sub="Orders" title="$2.4k" subtitle="2% less this month" />
                    </IconButton>
                    
                </Grid>
                <Grid item borderRadius="2%" xs={12} md={2.7} backgroundColor={colors.grey[100]} marginRight="8px"color="black">
                    <IconButton>
                        <AccountBalanceWalletOutlinedIcon   sx={{ fontSize: 100, color: colors.indigo[500], 
                                background: colors.indigo[100],
                                borderRadius: "50%"}}/>
                        <Logo sub="Balance" title="$2.4k" subtitle="2% less this month" />
                    </IconButton>
                    
                </Grid>
                <Grid item borderRadius="2%" xs={12} md={2.7} backgroundColor={colors.grey[100]}  color="black">
                   <IconButton>
                        <ShoppingBagOutlinedIcon   sx={{ fontSize: 100, color: colors.pink[500], 
                                background: colors.pink[100],
                                borderRadius: "50%"}}/>
                        <Logo sub="Orders" title="$89k" subtitle="11% less this month" />
                    </IconButton>
                    

                </Grid>
            </Grid>
            
            <Grid  container spacing={1} display="flex" position="relative" marginLeft="16px" >
                <Grid  height="350px" overflow="auto" item xs={12} md={7} borderRadius="2%"   backgroundColor={colors.grey[100]} marginRight="15px" marginBottom="15px">
                    <Bar/>
                </Grid>
                <Grid  item xs={12} overflow="auto" md={3.9} borderRadius="2%"  backgroundColor={colors.grey[100]}>
                    <Pie/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={11} backgroundColor={colors.grey[100]} sx={{
                    margin: "20px 20px 20px 20px",
                    borderRadius: "2%"
                }}>
                    <Product/>
                </Grid>
            </Grid>
        </Grid>
        
        )
}

export default Dashboard;