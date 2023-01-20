import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

document.title="Uzay Çelik";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,  
    document.getElementById('root')
  );