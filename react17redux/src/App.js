import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "./redux";

function App() {
  const count = useSelector((state) => state.countSlice.count);
  const [myvar, setMyvar] = useState(1);
  const dp = useDispatch();

  async function hdClick(e) {
    setMyvar((myvar) => myvar * 2);
    setMyvar((myvar) => myvar * 2);
    setMyvar((myvar) => myvar * 2);
    setMyvar((myvar) => myvar * 2);
    // setMyvar(myvar * 2);
    // setMyvar(myvar * 2);
    // setMyvar(myvar * 2);
    // setMyvar(myvar * 2);
    // setMyvar(myvar * 2);
    // setMyvar(myvar * 2);
    // dp(inc());
    // console.log("1");

    dp(inc());
    console.log("2");
    dp(inc());
    console.log("3");
    dp(inc());
    console.log("4");
    dp(inc());
    console.log("5");
    dp(inc());
    // Promise.resolve().then(() => {
    //   dp(inc());
    //   console.log("1");
    //   dp(inc());
    //   console.log("2");
    //   dp(inc());
    //   console.log("3");
    //   dp(inc());
    //   console.log("4");
    //   dp(inc());
    //   console.log("5");
    //   dp(inc());
    // });
  }
  return (
    <div>
      {console.log("render")}
      <h1>{count}</h1>
      <h1>{myvar}</h1>
      <button onClick={hdClick}>CLICK ME</button>
    </div>
  );
}

export default App;
