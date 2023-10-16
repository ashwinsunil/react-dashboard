import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={
            selected === title ? { backgroundColor: colors.blue[400] } : {
          color: colors.grey[100],
          
        }}
        onClick={() => setSelected(title)}
        
        icon={icon}
        component={<Link to={to} />}
      >
        <Typography>{title}</Typography>
        
      </MenuItem>
    );
  };

const SideBar= ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [selected, setSelected] = useState("Dashboard");
    return (
    
        <Box  style={{
            height:"100vh",
            position: "fixed",
            background:colors.blue[500],
            
            }}>
            <Sidebar
                backgroundColor= {colors.blue[500]} padding={4} >
            
        
        
                <Box background={colors.blue[500]}  >
                    <h1 >
                        <IconButton sx={{marginRight: "8px"}}>
                            <TokenOutlinedIcon fontSize="large" />
                        </IconButton>
                        Dashboard
                    </h1>
                </Box>
            
                <Menu

                    
                    icon=<MenuOutlinedIcon /> 
                    menuItemStyles={{
                    button: {
                        '&:hover':{
                            background: "#20184d"
                        },
                        
                    },
                    }}
                >
                    <Box   paddingRight={"10%"}>
                        <Item
                            
                            title="Dashboard"
                            to="/"
                            icon={<SpaceDashboardOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        
                        <Item
                            title="Product"
                            to="/product"
                            icon={<ViewInArOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Customers"
                            to="/customers"
                            icon={<AccountBoxOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Income"
                            to="/Income"
                            icon={<HistoryEduOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Promote"
                            to="/promote"
                            icon={<PercentOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Help"
                            to="/help"
                            icon={<LiveHelpOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <MenuItem
                        icon=<img
                                        alt="profile-user"
                                        width="40px"
                                        height="40px"
                                        src={`../../assets/user.png`}
                                        style={{ cursor: "pointer", borderRadius: "50%" }}
                                        />>
                            
                                <Box >
                                    <Box display="flex"  >
                                        
                                        <Typography
                                        variant="h4"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{ m: "10px 0 0 0" }}
                                        >
                                        Ashwin
                                        </Typography>
                                    </Box>
                                
                                </Box>
                        
                        </MenuItem>
                    </Box>
                    
                </Menu>

            
            </Sidebar>
        
    </Box>
    )
}

export default SideBar;