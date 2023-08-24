import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [permissionValue, setPermissionValue] =
    useState<NotificationPermission>();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactssss
        </a>
        {/* <button
          onClick={() => {
            Notification.requestPermission().then((result) => {
              console.log("Notification permission:", result);
            });
          }}
        >
          Request permission - {permissionValue}
        </button> */}
      </header>
    </div>
  );
}

export default App;
