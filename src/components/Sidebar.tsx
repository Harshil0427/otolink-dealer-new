// import { Link } from "react-router-dom";
// import "./Sidebar.css"; 

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>OtoLink</h2>
//       <ul>
//         <li><Link to="/shop-now">Shop Now</Link></li>
//         <li><Link to="/home-service">Home Service</Link></li>
//         <li><Link to="/vehicle-list">Vehicle List</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const Sidebar = ({ selectedUser }: { selectedUser: string }) => {
//   const menuItems = [
//     { name: "Dashboard", path: "/", icon: "🏠" },
//     { name: "User Management", path: "/user-management", icon: "👥" },
//     { name: "Staff", path: "/staff", icon: "👨‍💼" },
//     { name: "Vehicles", path: "/vehicles", icon: "🚗" },
//     { name: "Test Drive", path: "/test-drive", icon: "🏁" },
//     { name: "Shop Now", path: "/shop-now", icon: "🛒" },
//     { name: "Home Service", path: "/home-service", icon: "🏠" },
//     { name: "Service", path: "/service", icon: "🔧" },
//     { name: "Audience", path: "/audience", icon: "📊" },
//     { name: "Carousel Slider", path: "/carousel-slider", icon: "🎠" },
//     { name: "Dashboard Images", path: "/dashboard-images", icon: "🖼️" },
//     { name: "Promo Code", path: "/promo-code", icon: "💳" },
//   ];

//   // Hide certain menu items based on selected user
//   const filteredMenu = menuItems.filter((item) => {
//     if (selectedUser === "Dealer" && item.name === "User Management") return false;
//     if (selectedUser === "Manager" && item.name === "Promo Code") return false;
//     return true;
//   });

//   return (
//     <div className="sidebar">
//       <h2>OtoLink</h2>
//       <ul>
//         {filteredMenu.map((item) => (
//           <li key={item.name}>
//             <Link to={item.path}>
//               <span>{item.icon}</span> {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar bg-dark text-white vh-100 p-3">
      <h4 className="mb-4">OtoLink</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/Dashboard" className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="/user-management" className="nav-link text-white">
            <i className="bi bi-people me-2"></i> User Management
          </a>
        </li> */}
        <li className="nav-item">
          <a href="/vehicles" className="nav-link text-white">
            <i className="bi bi-car-front me-2"></i> Vehicles
          </a>
        </li>
        <li className="nav-item">
          <a href="/Shop-Now" className="nav-link text-white">
            <i className="bi bi-bag me-2"></i> Shop Now
          </a>
        </li>
        <li className="nav-item">
          <a href="/service" className="nav-link text-white">
            <i className="bi bi-tools me-2"></i> Service
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="/setting" className="nav-link text-white">
            <i className="bi bi-gear me-2"></i> Settings
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
