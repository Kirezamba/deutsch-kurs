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
          background: "linear-gradient(162deg, rgba(231,224,207,1) 0%, rgba(186,161,137,1) 96%)",
          borderColor: EnumColors.PRIMARY,
          color: "#000",
          textTransform: "none",
          fontSize: "16px",
          boxShadow: "5px 5px 26px 0px rgba(159, 134, 104, 0.8)",
        },
        text: {
          fontSize: "14px",
        },
      },
    },
  },
});
