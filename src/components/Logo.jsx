import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Logo = ({ sub, title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box  padding="20px">
      <Typography  variant="h5" color={colors.grey[700]}>
        {sub}
      </Typography>  
      <Typography
        variant="h2"
        color={colors.blue[900]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.grey[700]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Logo;