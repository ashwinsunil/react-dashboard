import { Box, IconButton, useTheme } from "@mui/material";
import {  tokens} from "../theme";
import {InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import WavingHandTwoToneIcon from '@mui/icons-material/WavingHandTwoTone';
import { orange } from '@mui/material/colors';



const Topbar= ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box display="flex" justifyContent="space-between" p={5} marginRight="100px">
            
            <Box color="black" fontSize={18} fontWeight="bold 600">
                Hello Ashwin
                <WavingHandTwoToneIcon sx={{ ml:2, color: orange[200] }}/>, 
            </Box>

            <Box 
                display="flex" 
                backgroundColor={colors.grey[100]} 
                color={colors.grey[600]} 
                borderRadius="3px"   
            >
                <IconButton type="button">
                    <SearchIcon sx={{color:colors.grey[900], mr:0}}/>
                </IconButton>
                <InputBase  sx={{ml: 2, flex:2, color:colors.grey[700]}} placeholder = "Search" />
                
            </Box>

        </Box>
    )
}

export default Topbar;