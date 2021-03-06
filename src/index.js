import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { UserProvider } from "./components/currentData.jsx";
import { CollegeProvider } from "../src/components/Dashboard/MyPlan/Financial Milestones/CollegeContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin + "/home"}
  >
    <CollegeProvider>
      {/* <UserProvider> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
      {/* </UserProvider> */}
    </CollegeProvider>
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
