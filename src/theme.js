
import { createTheme } from "@mui/material/styles";

import { createContext, useState, useMemo } from "react";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
  ?{
        pink:{
            100: '#FDDDF8',
            200: '#FBB6F1',
            300: '#F98FE9',
            400: '#F769E2',
            500: '#F542DA',
            600: '#F20DD0',
            700: '#BD0AA2',
            800: '#880774',
            900: '#520446',
        },
        indigo: {
            100: "#d9e3fd",
            200: "#b3c8fb",
            300: "#8eacf9",
            400: "#6891f7",
            500: "#4275f5",
            600: "#355ec4",
            700: "#284693",
            800: "#1a2f62",
            900: "#0d1731"
        },
        blue: {
            100: "#cccdd5",
            200: "#999baa",
            300: "#676a80",
            400: "#343855",
            500: "#01062b",
            600: "#010522",
            700: "#01041a",
            800: "#000211",
            900: "#000109"
        },
        grey: {
            100: "#f7f8fa",
            200: "#eff0f6",
            300: "#e8e9f1",
            400: "#e0e1ed",
            500: "#d8dae8",
            600: "#adaeba",
            700: "#82838b",
            800: "#56575d",
            900: "#2b2c2e"
        },
        greenAccent: {
            100: "#cff5df",
            200: "#9febbf",
            300: "#6ee0a0",
            400: "#3ed680",
            500: "#0ecc60",
            600: "#0ba34d",
            700: "#087a3a",
            800: "#065226",
            900: "#032913"
        },
        purple: {
            100: "#f9f4fe",
            200: "#f2e9fd",
            300: "#ecdefc",
            400: "#e5d3fb",
            500: "#dfc8fa",
            600: "#b2a0c8",
            700: "#867896",
            800: "#595064",
            900: "#2d2832"
        },
        red: {
            100: "#fde5ea",
            200: "#fbcbd5",
            300: "#f9b1bf",
            400: "#f797aa",
            500: "#f57d95",
            600: "#c46477",
            700: "#934b59",
            800: "#62323c",
            900: "#31191e"
        },
    }:
    {
        blue: {
            100: "#cccdd5",
            200: "#999baa",
            300: "#676a80",
            400: "#343855",
            500: "#01062b",
            600: "#010522",
            700: "#01041a",
            800: "#000211",
            900: "#000109"
        },
        grey: {
            100: "#f7f8fa",
            200: "#eff0f6",
            300: "#e8e9f1",
            400: "#e0e1ed",
            500: "#d8dae8",
            600: "#adaeba",
            700: "#82838b",
            800: "#56575d",
            900: "#2b2c2e"
        },
        greenAccent: {
            100: "#cff5df",
            200: "#9febbf",
            300: "#6ee0a0",
            400: "#3ed680",
            500: "#0ecc60",
            600: "#0ba34d",
            700: "#087a3a",
            800: "#065226",
            900: "#032913"
        },
        purple: {
            100: "#f9f4fe",
            200: "#f2e9fd",
            300: "#ecdefc",
            400: "#e5d3fb",
            500: "#390882",
            600: "#b2a0c8",
            700: "#867896",
            800: "#595064",
            900: "#2d2832"
        },
        red: {
            100: "#fde5ea",
            200: "#fbcbd5",
            300: "#f9b1bf",
            400: "#f797aa",
            500: "#f57d95",
            600: "#c46477",
            700: "#934b59",
            800: "#62323c",
            900: "#31191e"
        },
        indigo: {
          100: "#d9e3fd",
          200: "#b3c8fb",
          300: "#8eacf9",
          400: "#6891f7",
          500: "#4275f5",
          600: "#355ec4",
          700: "#284693",
          800: "#1a2f62",
          900: "#0d1731"
        },
        
    })
});
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
            primary: {
                main: colors.blue[500],
            },
            background:{
                default: colors.grey[300],
            },
            secondary:{
                main: colors.purple[500],
            },
            neutral:{
                main : colors.grey[500],
                dark : colors.grey[900],
                light: colors.grey[100],
            }
        }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
        },
        typography : {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 12,
            colors:"black",
            h1 : {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2 : {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3 : {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4 : {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5 : {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6 : {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    }

    
}
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };

