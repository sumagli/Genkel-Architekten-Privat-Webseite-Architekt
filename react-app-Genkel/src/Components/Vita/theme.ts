import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiTimelineOppositeContent: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
  },
  MuiTimeline: {
    styleOverrides: {
      root: {
        color: "black",
        bckgroundColor: "red",
        margin: 0,
        padding: 0,
      },
    },
  },
  "@global": {
    ".MuiTimeline-root": {
      margin: 0,
    },
  },
} as any);

export default theme;
