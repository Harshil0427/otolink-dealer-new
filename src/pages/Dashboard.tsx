import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Dashboard</h1>
        <button onClick={() => navigate("/main-dashboard")}>
          Navigate to Main Dashboard
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
