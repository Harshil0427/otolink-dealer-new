import React, {useState} from "react";
import './OrderList.css';


const OrderList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const orders = [
        { id: 113, name: 'Battery replacement AGM 60 AMP', price: 'USD 320', sku: 'BR7', scheduled: 'Yes', views: 14, booked: 1, sequence: 26, sales: 400, status: '💬' },
    { id: 114, name: 'Car Care while you are traveling', price: 'USD 80', sku: 'TC2', scheduled: 'Yes', views: 2, booked: 0, sequence: 25, sales: 0, status: '💬' },
    ];

    const filteredOrders = orders.filter(order =>
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter ? order.status === filter : true)
      );
     
    return (
      <div className="container-fluid">
        <div className="order-list">
          <div className="controls">
            <input
              type="text"
              placeholder="Search by order name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="">All</option>
              <option value="💬">💬</option>
              {/* Add other status options if needed */}
            </select>
            <button></button>
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
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                  <td>{order.sku}</td>
                  <td>{order.scheduled}</td>
                  <td>{order.views}</td>
                  <td>{order.booked}</td>
                  <td>{order.sequence}</td>
                  <td>{order.sales}</td>
                  <td>{order.status}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      );
    };

    export default OrderList;
