import React, { useState } from "react";
import "./ProductShopList.css";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faFilter,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";

const ProductShopList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([
    {
      id: 113,
      name: "Battery replacement AGM 60 AMP",
      price: "USD 320",
      sku: "BR7",
      scheduled: "Yes",
      views: 14,
      booked: 1,
      sequence: 26,
      sales: 400,
      status: "ON",
    },
    {
      id: 114,
      name: "Car Care while you are traveling",
      price: "USD 80",
      sku: "TC2",
      scheduled: "Yes",
      views: 2,
      booked: 0,
      sequence: 25,
      sales: 0,
      status: "OFF",
    },
  ]);

  const handleEdit = (item: any) => {
    console.log("Edit item:", item);
  };

  const handleDelete = (item: any) => {
    console.log("Delete item:", item);
  };

  const handleToggleStatus = (item: any) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === item.id
          ? { ...product, status: product.status === "ON" ? "OFF" : "ON" }
          : product
      )
    );
  };

  const handleSelectItem = (item: any, isChecked: boolean) => {
    console.log("Item selected:", item, "Checked:", isChecked);
  };

  const filteredData = products.filter(
    (item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      ) && (filter ? item.status === filter : true)
  );

  const downloadCSV = () => {
    const csvRows = [];
    const headers = [
      "ID",
      "Name",
      "Price",
      "SKU",
      "Scheduled",
      "Views",
      "Booked",
      "Sequence",
      "Sales",
      "Status",
    ];
    csvRows.push(headers.join(","));

    filteredData.forEach((row) => {
      const values = [
        row.id,
        row.name,
        row.price,
        row.sku,
        row.scheduled,
        row.views,
        row.booked,
        row.sequence,
        row.sales,
        row.status,
      ];
      csvRows.push(values.join(","));
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div className="container-fluids">
        <div className="product-list">
          <Sidebar />

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
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
              </select>
            </div>
            <button className="export-btn" onClick={downloadCSV}>
              <FontAwesomeIcon icon={faDownload} /> Export CSV
            </button>
            <button>Add Product & Service</button>
          </div>

          {/* Table */}
          <table className="common-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>SKU</th>
                <th>Scheduled</th>
                <th>Views</th>
                <th>Booked</th>
                <th>Sequence</th>
                <th>Sales</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.sku}</td>
                  <td>{item.scheduled}</td>
                  <td>{item.views}</td>
                  <td>{item.booked}</td>
                  <td>{item.sequence}</td>
                  <td>{item.sales}</td>
                  <td>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={item.status === "ON"}
                        onChange={() => handleToggleStatus(item)}
                      />
                      <span className="slider"></span>
                    </label>
                  </td>
                  <td>
                    <div className="actions-container">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          handleSelectItem(item, e.target.checked)
                        }
                      />
                      <button onClick={() => handleEdit(item)}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="fa-icon edit-icon"
                        />
                      </button>
                      <button onClick={() => handleDelete(item)}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="fa-icon delete-icon"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductShopList;
