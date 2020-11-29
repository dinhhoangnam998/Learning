import { ClickAwayListener, Paper, Popper } from "@material-ui/core";
import React, { useState } from "react";

export default function TestPoper() {
  const [anchor, setAnchor] = useState(null);
  return (
    <div>
      <ClickAwayListener onClickAway={(e) => setAnchor(null)}>
        <div>
          <button onClick={(e) => setAnchor(anchor ? null : e.currentTarget)}>Click me</button>
          <Popper open={Boolean(anchor)} anchorEl={anchor}>
            <Paper>
              {" "}
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde reiciendis eum voluptate aspernatur, nihil itaque aliquid facere autem similique?</div>
            </Paper>
          </Popper>
        </div>
      </ClickAwayListener>
    </div>
  );
}
