import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainDashboard from "./pages/MainDashboard";
import ProductList from "./components/Product/ProductList";
import OrderList from "./components/Order/OrderList";
import ProductShopList from "./components/Product/ProductShopList";
// import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main-dashboard" element={<MainDashboard />} />
        <Route path="/home-service/products" element={<ProductList />} />
        <Route path="/home-service/orders" element={<OrderList />} />
        <Route path="/shop-now/products" element={<ProductShopList />} />
        <Route path="/shop-now/orders" element={<OrderList />} />
        {/* // <Route path="/home-service/schedule" element={<Schedule />} /> * */}
      </Routes>
    </Router>
  );
}

export default App;
