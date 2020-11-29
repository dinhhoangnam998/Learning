import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState } from "react";

const theme = createMuiTheme({
  myvars: {
    var1: "green",
    var2: "200",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function TestAlert(props) {
  const [flag, setFlag] = useState(true);
  function hdClose() {
    setFlag(false);
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        {flag ? (
          <Alert severity="warning" onClose={hdClose} style={{ color: theme.myvars.var1 }}>
            helllajsd fjal sdjf;la sd
          </Alert>
        ) : (
          "nothing to show"
        )}
      </div>
    </ThemeProvider>
  );
}
