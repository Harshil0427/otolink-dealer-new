import React, {useState} from "react";
import './ProductList.css';
import Sidebar from "../Sidebar";


const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const products = [
        { id: 113, name: 'Battery replacement AGM 60 AMP', price: 'USD 320', sku: 'BR7', scheduled: 'Yes', views: 14, booked: 1, sequence: 26, sales: 400, status: '💬' },
    { id: 114, name: 'Car Care while you are traveling', price: 'USD 80', sku: 'TC2', scheduled: 'Yes', views: 2, booked: 0, sequence: 25, sales: 0, status: '💬' },
    ];

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter ? product.status === filter : true)
      );
     
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
              <option value="💬">💬</option>
              {/* Add other status options if needed */}
            </select>
            <button>Add Product & Service</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product/Service Name</th>
                <th>Price</th>
                <th>SKU</th>
                <th>Scheduled</th>
                <th>No of views</th>
                <th>No. of booked</th>
                <th>Set sequence</th>
                <th>Total sales</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.sku}</td>
                  <td>{product.scheduled}</td>
                  <td>{product.views}</td>
                  <td>{product.booked}</td>
                  <td>{product.sequence}</td>
                  <td>{product.sales}</td>
                  <td>{product.status}</td>
                  <td>{product.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      );
    };

    export default ProductList;
