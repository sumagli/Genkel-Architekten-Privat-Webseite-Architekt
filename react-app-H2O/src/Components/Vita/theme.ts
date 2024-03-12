import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiTimelineOppositeContent: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
  MuiTimeline: {
    styleOverrides: {
      root: {
        color: 'white',
        bckgroundColor: 'red',
        margin: 0,
        padding: 0,
      },
    },
  },
  '@global': {
    '.MuiTimeline-root': {
      margin: 0,
    },
  },
} as any);

export default theme;
