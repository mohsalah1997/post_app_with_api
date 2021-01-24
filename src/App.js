import React from "react";

import "./App.css";
import GetPost from "./components/getPost/getPost";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <head></head>
      <main>
        <GetPost />
      </main>
    </div>
  );
}

export default App;
