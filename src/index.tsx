import React from "react";
import ReactDOM from "react-dom";
import CardBoard from "./App";

ReactDOM.render(
  <div>
    <CardBoard title="title here 1" key="1" />
    <CardBoard title="title here 2" key="2" />
    <CardBoard title="title here 3" key="3" />
  </div>,
  document.getElementById("root"),
);
