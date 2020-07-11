import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";

import "./index.css";

const divRoot = document.querySelector("#app");

ReactDOM.render(<CounterApp value={10} />, divRoot);
