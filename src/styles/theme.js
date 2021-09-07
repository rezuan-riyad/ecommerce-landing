import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors';

export const theme = createTheme({
  palette: {
    body: {
      main: "eeeeee"
    },
    primary: {
      main: "#0C2D48"
    },
    secondary: {
      main: "#A30000"
    },
    icon: {
      light: "lightgray"
    }
  },
  typography: {
    body2: {
      fontSize: "12px"
    },
    body1: {
      fontSize: "14px"
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: "bold"
    },
    h4:{
      fontSize: 14,
      fontWeight: "bold"
    },
    h3:{
      fontSize: "32px"
    }
  },
  custom: {
    flexWithSpace: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    arrowBtn: {
      position: 'absolute',
      width: 50,
      height: 50,
      borderRadius: '50%',
      backgroundColor: 'rgba(0,0,0,0.1)',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer"
    }
  }
})