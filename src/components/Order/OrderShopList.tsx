import React, { useState } from "react";
import "./OrderList.css";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";

const OrderShopList = () => {
  const [orderStatusFilter] = useState("");
  const [paymentStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [modalShow, setModalShow] = useState(false);
  
  const [orders, setOrders] = useState([
    {
      id: 113,
      customer: "Naghi",
      mobile: "5760862340",
      product: "MR 12",
      orderedDate: "05/01/2025 05:30 PM",
      address: "Nr.Burj Khalifa",
      amount: "EGP 697",
      paymentType: "COD",
      technician: "Assign",
      orderStatus: "Pending",
      paymentStatus: "Payment Received",
    },
    {
      id: 114,
      customer: "Sharad Khainrar",
      mobile: "9558749522",
      product: "Islam Test",
      orderedDate: "26/12/2023 11:30 PM",
      address: "H-124, New Manicure, Zamalek",
      amount: "EGP 637",
      paymentType: "Card Payment",
      technician: "Assign",
      orderStatus: "Delivered",
      paymentStatus: "Payment Received",
    },
  ]);

  const handleOrderStatusChange = (id: number, newStatus: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, orderStatus: newStatus } : order
      )
    );
  };

  const handlePaymentStatusChange = (id: number, newStatus: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, paymentStatus: newStatus } : order
      )
    );
  };

  // Search & Filter Functionality
  const filteredOrders = orders.filter((order) => {
    return (
      (orderStatusFilter ? order.orderStatus === orderStatusFilter : true) &&
      (paymentStatusFilter ? order.paymentStatus === paymentStatusFilter : true) &&
      Object.values(order).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  // Download CSV Functionality
  const downloadCSV = () => {
    const csvRows = [];
    const headers = [
      "Order ID",
      "Customer Name",
      "Mobile",
      "Product(s)",
      "Ordered Date",
      "Address",
      "Amount",
      "Payment Type",
      "Technician",
      "Order Status",
      "Payment Status",
    ];
    csvRows.push(headers.join(","));

    filteredOrders.forEach((order) => {
      const values = [
        order.id,
        order.customer,
        order.mobile,
        order.product,
        order.orderedDate,
        order.address,
        order.amount,
        order.paymentType,
        order.technician,
        order.orderStatus,
        order.paymentStatus,
      ];
      csvRows.push(values.join(","));
    });

    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orderslist.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Header />
    <div className="container-fluids">
      <div className="order-list">
        {/* <Sidebar /> */}
        <h2>OrderList & Service</h2>
        
        <div className="toolbar-container">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search Orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="download-btn" onClick={downloadCSV}>
            <FontAwesomeIcon icon={faDownload} /> Download CSV
          </button>
        </div>

        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Mobile</th>
              <th>Product(s)</th>
              <th>Ordered Date</th>
              <th>Address</th>
              <th>Amount</th>
              <th>Payment Type</th>
              <th>Technician</th>
              <th>Order Status</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  {order.id}{" "}
                  <FontAwesomeIcon
                    icon={faEye}
                    className="eye-icon"
                    onClick={() => {
                      setSelectedOrder(order);
                      setModalShow(true);
                    }}
                    style={{ cursor: "pointer", color: "#007bff", marginLeft: "5px" }}
                  />
                </td>
                <td>{order.customer}</td>
                <td>{order.mobile}</td>
                <td>{order.product}</td>
                <td>{order.orderedDate}</td>
                <td>{order.address}</td>
                <td>{order.amount}</td>
                <td>{order.paymentType}</td>
                <td>{order.technician}</td>
                <td>
                  <select
                    value={order.orderStatus}
                    onChange={(e) => handleOrderStatusChange(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td>
                  <select
                    value={order.paymentStatus}
                    onChange={(e) => handlePaymentStatusChange(order.id, e.target.value)}
                  >
                    <option value="Payment Received">Payment Received</option>
                    <option value="Payment Pending">Payment Pending</option>
                    <option value="Refunded">Refunded</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Implementation */}
      {selectedOrder && (
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Order Id: </strong> {selectedOrder.id}</p>
            <p><strong>Customer:</strong> {selectedOrder.customer}</p>
            <p><strong>Mobile:</strong> {selectedOrder.mobile}</p>
            <p><strong>Product:</strong> {selectedOrder.product}</p>
            <p><strong>Ordered Date:</strong> {selectedOrder.orderedDate}</p>
            <p><strong>Address:</strong> {selectedOrder.address}</p>
            <p><strong>Amount:</strong> {selectedOrder.amount}</p>
            <p><strong>Payment Type:</strong> {selectedOrder.paymentType}</p>
            <p><strong>Technician:</strong> {selectedOrder.technician}</p>
            <p><strong>Order Status:</strong> {selectedOrder.orderStatus}</p>
            <p><strong>Payment Status:</strong> {selectedOrder.paymentStatus}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
</>
  );
};

export default OrderShopList;
