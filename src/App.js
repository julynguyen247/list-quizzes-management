import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.js";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container">

        </div>
        <div className="app-content">
        <PerfectScrollbar>
            <Outlet/>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
}

export default App;
