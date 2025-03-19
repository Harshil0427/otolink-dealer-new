import React, { useState } from "react";
import "./ProductList.css";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faFilter,
  faDownload,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import AddProductForm from "../Product/AddProductForm"; // Adjust the path if needed

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [editableProduct, setEditableProduct] = useState<any>(null);

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

  const handleEdit = (product: any) => {
    setEditingProductId(product.id);
    setEditableProduct({ ...product });
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
    setEditableProduct(null);
  };

  const handleSaveEdit = () => {
    if (!editableProduct) return;
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editableProduct.id ? { ...editableProduct } : product
      )
    );
    setEditingProductId(null);
    setEditableProduct(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (!editableProduct) return;
    setEditableProduct({ ...editableProduct, [field]: e.target.value });
  };

  const handleDelete = (item: any) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== item.id)
    );
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

  const handleAddProduct = (newProduct: any) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setShowAddProductForm(false);
  };

  const filteredData = products.filter(
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

    filteredData.forEach((value) => {
      const values = [
        value.id,
        value.name,
        value.price,
        value.sku,
        value.scheduled,
        value.views,
        value.booked,
        value.sequence,
        value.sales,
        value.status,
      ];
      csvRows.push(values.join(","));
    });

    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "productlist.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <Header />
      <div className="container-fluids">
      <Sidebar />  
      <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t">
      <h2>Home Service - Product List</h2>
      </div>
        <div className="product-list">
          {showAddProductForm && (
            <div className="modal-overlay">
              <div className="modal-content">
                <AddProductForm onAddProduct={handleAddProduct} />
                <button onClick={() => setShowAddProductForm(false)}>
                  Close
                </button>
              </div>
            </div>
          )}

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
            <button className="download-btn" onClick={downloadCSV}>
              <FontAwesomeIcon icon={faDownload} /> Download CSV
            </button>
            <button onClick={() => setShowAddProductForm(true)}>
              Add Product & Service
            </button>
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
                  <td>
                    {editingProductId === item.id ? (
                      <input
                        type="text"
                        value={editableProduct?.name || ""}
                        onChange={(e) => handleInputChange(e, "name")}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {editingProductId === item.id ? (
                      <input
                        type="text"
                        value={editableProduct?.price || ""}
                        onChange={(e) => handleInputChange(e, "price")}
                      />
                    ) : (
                      item.price
                    )}
                  </td>
                  <td>
                    {editingProductId === item.id ? (
                      <input
                        type="text"
                        value={editableProduct?.sku || ""}
                        onChange={(e) => handleInputChange(e, "sku")}
                      />
                    ) : (
                      item.sku
                    )}
                  </td>
                  <td>
                    {editingProductId === item.id ? (
                      <input
                        type="text"
                        value={editableProduct?.scheduled || ""}
                        onChange={(e) => handleInputChange(e, "scheduled")}
                      />
                    ) : (
                      item.scheduled
                    )}
                  </td>
                  <td>
                    {editingProductId === item.id ? (
                      <input
                        type="number"
                        value={editableProduct?.views || ""}
                        onChange={(e) => handleInputChange(e, "views")}
                      />
                    ) : (
                      item.views
                    )}
                  </td>
                  <td>
                    {editingProductId === item.id ? (
                      <input
                        type="number"
                        value={editableProduct?.booked || ""}
                        onChange={(e) => handleInputChange(e, "booked")}
                      />
                    ) : (
                      item.booked
                    )}
                  </td>
                  <td>
                    {editingProductId === item.id ? (
                      <input
                        type="number"
                        value={editableProduct?.sequence || ""}
                        onChange={(e) => handleInputChange(e, "sequence")}
                      />
                    ) : (
                      item.sequence
                    )}
                  </td>
                  <td>
                    {editingProductId === item.id ? (
                      <input
                        type="number"
                        value={editableProduct?.sales || ""}
                        onChange={(e) => handleInputChange(e, "sales")}
                      />
                    ) : (
                      item.sales
                    )}
                  </td>
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
                      {editingProductId === item.id ? (
                        <>
                          <button onClick={handleSaveEdit}>
                            <FontAwesomeIcon
                              icon={faSave}
                              className="fa-icon save-icon"
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
                        </>
                      )}
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

export default ProductList;
