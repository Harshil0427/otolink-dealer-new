import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");


     const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

     const handleCheckboxChange = (option: string) => {
        setSelectedItems((prevSelected) =>
          prevSelected.includes(option)
            ? prevSelected.filter((item) => item !== option)
            : [...prevSelected, option]
        );
      };

      const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      );
    

     return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <div className="container-fluid">
        {/* Sidebar Toggle Button */}
        <button className="btn btn-light me-3">
          <i className="bi bi-list fs-4"></i>
        </button>

        {/* Title */}
        <h5 className="m-0">OtoLink</h5>

        <div className="ms-auto d-flex align-items-center">
          {/* Multi-Select Dropdown with Search */}
          <div className="dropdown me-3">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="multiSelectDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedItems.length > 0 ? selectedItems.join(", ") : "Select"}
            </button>

            <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="multiSelectDropdown">
              {/* Search Field */}
              <li className="px-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </li>
              
              <li><hr className="dropdown-divider" /></li>

              {/* Filtered Options */}
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <li key={option} className="form-check px-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={option}
                      checked={selectedItems.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    <label className="form-check-label" htmlFor={option}>
                      {option}
                    </label>
                  </li>
                ))
              ) : (
                <li className="text-muted px-3">No results found</li>
              )}
            </ul>
          </div>

          {/* Notification Bell */}
          <div className="position-relative me-3">
            <i className="bi bi-bell fs-5"></i>
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-1 rounded-circle">
              3
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle d-flex align-items-center"
              type="button"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <i className="bi bi-person-circle fs-5 me-2"></i> Admin
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="/Profile">
                    <i className="bi bi-person me-2"></i> My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/change-password">
                    <i className="bi bi-key me-2"></i> Change Password
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="/">
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Header;

