import React from "react";
import { Button, Fade, Paper } from "@material-ui/core";

function Content(props) {
  return (
    <div {...props}>
      <Paper>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ut quasi assumenda maiores facilis enim delectus iste. Culpa, omnis dolorem!</Paper>
    </div>
  );
}

export default function TestTransition() {
  const [open, setOpen] = React.useState(false);
  function hdClick(e) {
    setOpen(!open);
  }

  return (
    <div>
      <Button onClick={hdClick}>click me</Button>
      <Fade in={open}>
        <Content></Content>
      </Fade>
    </div>
  );
}
