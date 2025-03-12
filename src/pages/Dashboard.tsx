import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard: React.FC = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-100">
        <Header />
        <div className="container p-4">
          <h2 className="mb-4">Dashboard</h2>
          <button className="btn btn-primary">Go to Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
