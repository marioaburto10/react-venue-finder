// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// import Routes from React Router
import routes from "./config/routes";

// Renders the contents according to the route page
// Displays the contents in the div app of index.html
ReactDOM.render(routes, document.getElementById("app"));