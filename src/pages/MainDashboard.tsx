import Sidebar from "../components/Sidebar";

const MainDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Main Dashboard</h1>
        <p>Welcome to the main dashboard!</p>
      </div>
    </div>
  );
};

export default MainDashboard;
