import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme} from "@mui/material";
import { mockPieData as data } from "../data/mockData";


const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
        
            <ResponsivePie
                
                colors={['#eb3486', '#a234eb', colors.grey[500]]}
                data={data}
            
                enableArcLabels={false}
                enableArcLinkLabels={false}
                margin={{ top: 20, right: 5, bottom: 20, left: 5 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                
                defs={[
                        {
                            id: "dots",
                            type: "patternDots",
                            background: "inherit",
                            color: "rgba(255, 255, 255, 0.3)",
                            size: 4,
                            padding: 1,
                            stagger: true,
                        },
                        {
                            id: "lines",
                            type: "patternLines",
                            background: "inherit",
                            color: "rgba(255, 255, 255, 0.3)",
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                        },
                    ]}
    
            />

       
        
           
   
    
  );
};

export default PieChart;