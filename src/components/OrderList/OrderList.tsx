import React, {useState} from "react";
import './OrderList.css';
import Sidebar from "../Sidebar";
import { orderColumns } from "../CommonTable/columns";
import CommonTable from "../CommonTable/CommoTable";
// import CommonTable from "../CommonTable/CommoTable";
// import {orderColumns} from "../CommonTable/columns"

const OrderList = () => {
   const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [orders, setOrders] = useState([
      { id: 113, customer: 'Naghi', mobile: '5760862340', product: 'MR 12', Ordereddate: "05/01/2025 05:30 PM", scheduleddate: "14/01/2025 05:10 PM", scheduletime: "05:55", address: "Nr.Burj khalifa", amount: "EGP 697", esthour:"10 Hours", paymenttype: "COD", technician: "Assign" , status: "Confirm", paymentstatus: "Recieved" },
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
    
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === item.id
            ? {
                ...order,
                status:
                  order.status === "Confirm"
                    ? "Pending"
                    : order.status === "Pending"
                    ? "Cancel"
                    : "Confirm", // Loops back to Confirm
              }
            : order
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
          {/* <button>Add Product & Service</button> */}
        </div>
        <CommonTable
          columns={orderColumns}
          data={orders}
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

    export default OrderList;
