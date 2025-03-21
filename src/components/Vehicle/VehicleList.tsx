import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VehicleList.css";
import {
  faEdit,
  faTrash,
  faFilter,
  faDownload,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Sidebar from "../Sidebar";

const VehicleList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [editingVehicleId, setEditingVehicleId] = useState<number | null>(null);
  const [editableVehicle, setEditableVehicle] = useState<any>(null);
  const [vehicles, setVehicles] = useState([
    {
      id: 113,
      name: "Toyota",
      sequence: 45,
      status: "ON",
    },
    {
      id: 120,
      name: "Ertiga",
      sequence: 10,
      status: "ON",
    },
    {
      id: 150,
      name: "Thar",
      sequence: 5,
      status: "ON",
    },
    {
      id: 130,
      name: "Nexon",
      sequence: 9,
      status: "OFF",
    },
  ]);

  const navigate = useNavigate();

  const handleEdit = (product: any) => {
    navigate("/vehicle/editVehicle", { state: { product } });
    setEditingVehicleId(product.id);
    setEditableVehicle({ ...product });
  };

  const handleCancelEdit = () => {
    setEditingVehicleId(null);
    setEditableVehicle(null);
  };

  const handleSaveEdit = () => {
    if (!editableVehicle) return;
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) =>
        vehicle.id === editableVehicle.id ? { ...editableVehicle } : vehicle
      )
    );
    setEditingVehicleId(null);
    setEditableVehicle(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (!editableVehicle) return;
    setEditableVehicle({ ...editableVehicle, [field]: e.target.value });
  };

  const handleDelete = (item: any) => {
    setVehicles((prevProducts) =>
      prevProducts.filter((product) => product.id !== item.id)
    );
  };

  const handleToggleStatus = (item: any) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((product) =>
        product.id === item.id
          ? { ...product, status: product.status === "ON" ? "OFF" : "ON" }
          : product
      )
    );
  };

  const filteredData = vehicles.filter(
    (item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      ) && (filter ? item.status === filter : true)
  );

  // Download CSV Functionality
  const downloadCSV = () => {
    const csvRows = [];
    const headers = [
      "ID",
      "Name",
      "Sequence",
      "Status",
    ];
    csvRows.push(headers.join(","));

    filteredData.forEach((value) => {
      const values = [value.id, value.name, value.sequence, value.status];
      csvRows.push(values.join(","));
    });

    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Vehiclelist.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  return (
    <>
      <Header />
      <div className="container-fluids">
      <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t">
        {/* <Sidebar /> */}
        <h2>New Models</h2>
      </div>

      {/* Search, Filter & Add Product */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by product/service name or SKU"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="filter-dropdown">
          <FontAwesomeIcon icon={faFilter} />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="ON">ON</option>
            <option value="OFF">OFF</option>
          </select>
        </div>
        <button className="download-btn" onClick={downloadCSV}>
          <FontAwesomeIcon icon={faDownload} /> Download CSV
        </button>
        <button
          className="bg-blue text-blue-50 px-4 py-2 rounded shadow"
          onClick={() => navigate("/vehicle/add-vehicle")}
        >
          Add new model
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
  <thead>
    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
      <th className="py-3 px-6 text-left">ID</th> 
      <th className="py-3 px-6 text-left">Name</th>
      <th className="py-3 px-6 text-center">Sequence</th>
      <th className="py-3 px-6 text-center">Status</th>
      <th className="py-3 px-6 text-center">Actions</th>
    </tr>
  </thead>
        <tbody>
          {filteredData.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>
                {editingVehicleId === vehicle.id ? (
                  <input
                    type="text"
                    value={editableVehicle?.name || ""}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                ) : (
                  vehicle.name
                )}
              </td>
              <td>
                {editingVehicleId === vehicle.id ? (
                  <input
                    type="number"
                    value={editableVehicle?.sequence || ""}
                    onChange={(e) => handleInputChange(e, "sequence")}
                  />
                ) : (
                  vehicle.sequence
                )}
              </td>
              <td>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={vehicle.status === "ON"}
                    onChange={() => handleToggleStatus(vehicle)}
                  />
                  <span className="slider"></span>
                </label>
              </td>
              <td>
                <div className="actions-container">
                  {editingVehicleId === vehicle.id ? (
                    <>
                      <button onClick={handleSaveEdit}>
                        <FontAwesomeIcon
                          icon={faSave}
                          className="fa-icon save-icon"
                          onClick={() => handleEdit(vehicle)}
                        />
                      </button>
                      <button onClick={handleCancelEdit}>
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="fa-icon cancel-icon"
                        />
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(vehicle)}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="fa-icon edit-icon"
                        />
                      </button>
                      <button onClick={() => handleDelete(vehicle)}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="fa-icon delete-icon"
                        />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default VehicleList;
