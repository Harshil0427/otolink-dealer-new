// import React, { useState } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard: React.FC = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="w-100">
        <Header />
        <div className="container p-4">
          {/* <h2 className="mb-4">Dashboard</h2> */}
          <a href="https://www.google.com/"><button className="btn btn-primary custom-button">Go to Dashboard</button></a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
