import React, { JSX, useState } from "react";
import "./CommonTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,faFilter, faDownload } from "@fortawesome/free-solid-svg-icons";

interface Column {
  key: string;
  header: string;
}

interface CommonTableProps {
  columns: Column[];
  data: any[];
  searchTerm: string;
  filter: string;
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
  onToggleStatus: (item: any) => void;
  onSelectItem: (item: any, isChecked: boolean) => void;
  renderCell?: (columnKey: string, item: any) => JSX.Element | string;
}

const CommonTable: React.FC<CommonTableProps> = ({
  columns,
  data,
  onEdit,
  onDelete,
  onToggleStatus,
  onSelectItem,
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");

    const filteredData = data.filter(
        (item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
          ) && (filter ? item.status === filter : true)
      );

      const downloadCSV = () => {
        const csvRows = [];
        const headers = columns.map((col) => col.header).join(",");
        csvRows.push(headers);
    
        filteredData.forEach((row) => {
          const values = columns.map((col) => `"${row[col.key] ?? ""}"`);
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
    <div className="table-container">
      {/* Search and Filter Section */}
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search by product/service name or SKU"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="filter-dropdown">
          <FontAwesomeIcon icon={faFilter} />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="ON">ON</option>
            <option value="OFF">OFF</option>
          </select>
        </div>
        <button className="export-btn" onClick={downloadCSV}>
          <FontAwesomeIcon icon={faDownload} /> Export CSV
        </button>
      </div>

      {/* Table Component */}
      <table className="common-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.key === "actions" ? (
                    <div className="actions-container">
                      <input
                        type="checkbox"
                        onChange={(e) => onSelectItem(item, e.target.checked)}
                      />
                      <button onClick={() => onEdit(item)}>
                        <FontAwesomeIcon icon={faEdit} className="fa-icon" />
                      </button>
                      <button onClick={() => onDelete(item)}>
                        <FontAwesomeIcon icon={faTrash} className="fa-icon" />
                      </button>
                    </div>
                  ) : column.key === "status" ? (
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={item.status === "ON"}
                        onChange={() => onToggleStatus(item)}
                      />
                      <span className="slider"></span>
                    </label>
                  ) : (
                    item[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default CommonTable;
