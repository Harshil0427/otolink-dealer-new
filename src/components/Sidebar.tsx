import { Link } from "react-router-dom";
import "./Sidebar.css"; // Create a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>OtoLink</h2>
      <ul>
        <li><Link to="/shop-now">Shop Now</Link></li>
        <li><Link to="/home-service">Home Service</Link></li>
        <li><Link to="/vehicle-list">Vehicle List</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
