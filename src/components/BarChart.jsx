import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      colors={[ '#a234eb', colors.grey[500]]}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[900],
            },
          },
          ticks: {
            
            text: {
              fill: colors.grey[700],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[900],
          },
        },
      }}
      keys={["sales"]}
      indexBy="month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      
      
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        
      ]}
      
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "", 
        legendPosition: "middle",
        legendOffset: 32,
      }}
      legend={
        {
            itemDirection:"right-to-left"
        }
      }
      axisLeft={null}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      
      role="application"
     
    />
  );
};

export default BarChart;