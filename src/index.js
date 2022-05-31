import React, { Component } from "react";
import { render } from "react-dom";
import Map from "./map";

render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
  document.body.appendChild(document.getElementById("root"))
);
