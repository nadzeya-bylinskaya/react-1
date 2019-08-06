import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addMessage } from "./redux/state";
import { addPost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={addMessage} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
