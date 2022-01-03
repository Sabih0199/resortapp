import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RoomProvider from "./context";
import { createStore } from "redux";
import { Provider } from "react-redux";

// store = createStore();

ReactDOM.render(
  <RoomProvider>
    {/* <Provider store={store}> */}
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
    {/* </Provider> */}
  </RoomProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
