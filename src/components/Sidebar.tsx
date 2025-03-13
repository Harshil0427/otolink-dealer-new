import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar: React.FC = () => {
  const [homeServiceOpen, setHomeServiceOpen] = useState(false);
  const [shopNowOpen, setShopNowOpen] = useState(false)
  const [vehicleOpen, setVehicleOpen] = useState(false)


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
        <button
            className="nav-link text-white w-100 text-start d-flex align-items-center"
            onClick={() => setVehicleOpen(!vehicleOpen )}
            style={{ background: "none", border: "none" }}
          >
            <i className="bi bi-shop me-2"></i>Vehicles
            <i className={`bi ms-auto ${vehicleOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
          </button>
          {vehicleOpen && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <a href="/vehicle/new-vehicles" className="nav-link text-white">
                  <i className="bi bi-box-seam me-2"></i> New Vehicles
                </a>
              </li>
              <li className="nav-item">
                <a href="/vehicle/pre-owned" className="nav-link text-white">
                  <i className="bi bi-list-check me-2"></i> Pre Owned
                </a>
              </li>
              <li className="nav-item">
                <a href="/vehicle/colors" className="nav-link text-white">
                  <i className="bi bi-calendar-check me-2"></i> Colors
                </a>
              </li>
              <li className="nav-item">
                <a href="/vehicle/features" className="nav-link text-white">
                  <i className="bi bi-list-check me-2"></i> Features
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
        <button
            className="nav-link text-white w-100 text-start d-flex align-items-center"
            onClick={() => setShopNowOpen(!shopNowOpen)}
            style={{ background: "none", border: "none" }}
          >
            <i className="bi bi-shop me-2"></i>Shop Now
            <i className={`bi ms-auto ${shopNowOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
          </button>
          {shopNowOpen && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <a href="/shop-now/products" className="nav-link text-white">
                  <i className="bi bi-box-seam me-2"></i> Products
                </a>
              </li>
              <li className="nav-item">
                <a href="/shop-now/orders" className="nav-link text-white">
                  <i className="bi bi-list-check me-2"></i> Orders
                </a>
              </li>
              <li className="nav-item">
                <a href="/shop-now/schedule" className="nav-link text-white">
                  <i className="bi bi-calendar-check me-2"></i> My Schedule
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
        <button
            className="nav-link text-white w-100 text-start d-flex align-items-center"
            onClick={() => setHomeServiceOpen(!homeServiceOpen)}
            style={{ background: "none", border: "none" }}
          >
            <i className="bi bi-house-door me-2"></i> Home Service
            <i className={`bi ms-auto ${homeServiceOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
          </button>
          {homeServiceOpen && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <a href="/home-service/products" className="nav-link text-white">
                  <i className="bi bi-box-seam me-2"></i> Products
                </a>
              </li>
              <li className="nav-item">
                <a href="/home-service/orders" className="nav-link text-white">
                  <i className="bi bi-list-check me-2"></i> Orders
                </a>
              </li>
              <li className="nav-item">
                <a href="/home-service/schedule" className="nav-link text-white">
                  <i className="bi bi-calendar-check me-2"></i> My Schedule
                </a>
              </li>
            </ul>
          )}
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
