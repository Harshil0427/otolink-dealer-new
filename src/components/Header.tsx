import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
    
    const dropdownRef = useRef<HTMLDivElement>(null);
    const profileDropdownRef = useRef<HTMLDivElement>(null);

    const options = [
      "Naghi",
      "Bnk Automotive",
      "Ezz Elarab",
      "Al Jazirah Vehicles Agencies",
      "Al Mana Motors",
      "Star National Automotive",
      "Test Company One"
  ];
  
  const handleSelect = (option: string) => {
    setSelectedItems(option); // ✅ Store only one selected item
    setDropdownOpen(false); // ✅ Close dropdown
};

const removeSelectedItem = () => {
    setSelectedItems(null);
};

const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
);

// Close dropdown when clicking outside
useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);
return (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <div className="container-fluid">
          {/* <h5 className="m-1">OtoLink</h5> */}
          <h5 className="m-0 data-center">
              {selectedItems ? <span className="fw-bold">{selectedItems}</span> : "Select Client"}
          </h5>

          <div className="ms-auto d-flex align-items-center">
              {/* Dropdown */}
              <div className="dropdown me-3" ref={dropdownRef}>
                  <div className="custom-dropdown-toggle" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                      {selectedItems ? (
                          <span className="badge bg-primary p-2">
                              {selectedItems}{" "}
                              <i
                                  className="bi bi-x ms-1"
                                  style={{ cursor: "pointer" }}
                                  onClick={(e) => {
                                      e.stopPropagation();
                                      removeSelectedItem();
                                  }}
                              ></i>
                          </span>
                      ) : (
                          "Select"
                      )}
                      <i className="bi bi-chevron-down ms-2"></i>
                  </div>

                  {isDropdownOpen && (
                      <div className="custom-dropdown-menu">
                          {/* Search Field */}
                          <div className="dropdown-search">
                              <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search..."
                                  value={searchTerm}
                                  onChange={(e) => setSearchTerm(e.target.value)}
                              />
                          </div>
                          <hr className="m-2" />

                          {filteredOptions.length > 0 ? (
                              filteredOptions.map((option) => (
                                  <div key={option} className="px-2">
                                      <button
                                          className="btn btn-outline-primary w-100 text-start"
                                          onClick={() => handleSelect(option)}
                                      >
                                          {option}
                                      </button>
                                  </div>
                              ))
                          ) : (
                              <div className="text-muted px-3">No results found</div>
                          )}
                      </div>
                  )}
              </div>

              {/* Notification Bell */}
              <div className="position-relative me-3">
                  <i className="bi bi-bell fs-5"></i>
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-1 rounded-circle">
                      3
                  </span>
              </div>

              {/* Profile Dropdown */}
              <div className="dropdown" ref={profileDropdownRef}>
                  <button
                      className="btn btn-light dropdown-toggle d-flex align-items-center"
                      type="button"
                      onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
                  >
                      <i className="bi bi-person-circle fs-5 me-2"></i> Admin
                  </button>
                  {isProfileDropdownOpen && (
                      <ul className="dropdown-menu dropdown-menu-end show">
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
