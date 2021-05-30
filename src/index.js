import React from "react";
import ReactDom from "react-dom";
import Counters from "./Components/counters";
import "bootstrap/dist/css/bootstrap.css";

const element = <h1>Hello world</h1>;
ReactDom.render(<Counters />, document.getElementById("root"));
