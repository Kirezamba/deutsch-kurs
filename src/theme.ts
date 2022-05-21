import { EnumColors } from "./types/colors";
import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: EnumColors.PRIMARY,
    },
    secondary: {
      main: EnumColors.BACKGROUND,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: EnumColors.PRIMARY,
          borderColor: EnumColors.PRIMARY,
          color: EnumColors.BACKGROUND,
          textTransform: "none",
          fontSize: 14,
          boxShadow: "5px 5px 26px 0px rgba(159, 134, 104, 0.8)",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: "2px",
        },
      },
    },
  },
});
