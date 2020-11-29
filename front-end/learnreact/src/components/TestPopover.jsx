import React, { useState } from "react";
import { Button, Popover, Typography } from "@material-ui/core";

export default function TestPopover(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>click me</Button>
      <Popover
        open={Boolean(anchorEl)}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={(e) => setAnchorEl(null)}
      >
        <Typography>Hello hasdjlf asjdl fjasoidujf</Typography>
      </Popover>
    </div>
  );
}
