import React from "react";
import "./Schedule.css";
import Header from "../Header";

const Schedule: React.FC = () => {
  return (
    <>
        <Header />
        <div className="container-fluids">
    <div className="schedule-container">
      {/* Today's Schedule */}
      <div className="schedule-section">
        <h2>My today's schedule</h2>
        <p className="no-schedule">No Schedule Found</p>
      </div>

      {/* Upcoming Schedule */}
      <div className="schedule-section">
        <h2>My upcoming schedule</h2>
        <p className="no-schedule">No Schedule Found</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Schedule;