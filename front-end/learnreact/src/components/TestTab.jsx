import { Paper, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function TestTab() {
  const [value, setValue] = useState(1);
  function hdChange(e, value) {
    setValue(value);
  }
  return (
    <div>
      <Paper>
        <Tabs value={value} onChange={hdChange}>
          <Tab label="one"></Tab>
          <Tab lable="true"></Tab>
          <Tab label="three"></Tab>
        </Tabs>
      </Paper>
      {/* <Panel */}
    </div>
  );
}
