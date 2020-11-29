import { Button, createMuiTheme, Drawer, ThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Test from "./components/Test";
import TestAlert from "./components/TestAlert";
import TestPoper from "./components/TestPoper";
import TestTransition from "./components/TestTransition";

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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <TestPoper></TestPoper> */}
        {/* <TestTransition></TestTransition> */}
        <Button style={{ backgroundColor: "green", color: "white" }} variant="contained">
          asdfa sdfa sd
        </Button>
        <TestAlert></TestAlert>
      </div>
    </ThemeProvider>
  );
}
