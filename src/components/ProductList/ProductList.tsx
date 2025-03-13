import React, { useState } from "react";
import './ProductList.css';
import Sidebar from "../Sidebar";
import CommonTable from "../CommonTable/CommoTable";
import { productColumns } from "../CommonTable/columns";


const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState([
    { id: 113, name: 'Battery replacement AGM 60 AMP', price: 'USD 320', sku: 'BR7', scheduled: 'Yes', views: 14, booked: 1, sequence: 26, sales: 400, status: 'ON' },
    { id: 114, name: 'Car Care while you are traveling', price: 'USD 80', sku: 'TC2', scheduled: 'Yes', views: 2, booked: 0, sequence: 25, sales: 0, status: 'OFF' },
  ]);


  const handleEdit = (item: any) => {
    console.log('Edit item:', item);
    // Implement edit logic here
  };

  const handleDelete = (item: any) => {
    console.log('Delete item:', item);
    // Implement delete logic here
  };

  const handleToggleStatus = (item: any) => {
    console.log("Toggling status for:", item); // Debugging step
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === item.id
          ? { ...product, status: product.status === "ON" ? "OFF" : "ON" }
          : product
      )
    );
  };

  

  const handleSelectItem = (item: any, isChecked: boolean) => {
    console.log('Item selected:', item, 'Checked:', isChecked);
  }

  return (
    <div className="container-fluids">
      <div className="product-list">
        <Sidebar />
        <div className="controls">
          <input
            type="text"
            placeholder="Search by product/service name or SKU"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="ON">ON</option>
            <option value="OFF">OFF</option>
          </select>
          <button>Add Product & Service</button>
        </div>
        <CommonTable
          columns={productColumns}
          data={products}
          searchTerm={searchTerm}
          filter={filter}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus} 
          onSelectItem={handleSelectItem}// Pass the toggle function
        />
      </div>
    </div>
  );
};

export default ProductList;