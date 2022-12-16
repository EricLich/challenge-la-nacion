import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GroupsProvider from "./contexts/GroupContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GroupsProvider>
      <App />
    </GroupsProvider>
  </React.StrictMode>
);