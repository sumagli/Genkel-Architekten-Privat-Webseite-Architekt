import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {  // This will target all TableCell components
          color: 'white',  // Set text color to white
          // You can add more styling here if needed
        },
      },
    },
  },
});

export default theme;