import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainDashboard from "./pages/MainDashboard";
import ProductList from "./components/Product/ProductList";
import OrderList from "./components/Order/OrderList";
import ProductShopList from "./components/Product/ProductShopList";
import Schedule from "./components/Product/Schedule";
import Vehicle from "./pages/Vehicle";
import AddVehicle from "./components/Vehicle/AddVehicle";
import ColorList from "./components/Vehicle/ColorsList";
import AddColors from "./components/Vehicle/AddColor";
import AddColours from "./components/Vehicle/AddColor";
import EditVehicle from "./components/Vehicle/EditVehicle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main-dashboard" element={<MainDashboard />} />
        <Route path="/home-service/products" element={<ProductList />} />
        <Route path="/home-service/orders" element={<OrderList />} />
        <Route path="/home-service/schedule" element={<Schedule />} />    
        <Route path="/shop-now/products" element={<ProductShopList />} />
        <Route path="/shop-now/orders" element={<OrderList />} />
        <Route path="/shop-now/schedule" element={<Schedule />} /> 
        <Route path="/vehicle/new-vehicle" element={<Vehicle />} /> 
        <Route path="/vehicle/add-vehicle" element={<AddVehicle />}  />
        <Route path="/vehicle/editVehicle" element={<EditVehicle />} />
        <Route path="/vehicle/colours" element={<ColorList />}  />
        <Route path="/colour/add-colour" element={<AddColours />}  />
        </Routes>
    </Router>
  );
}

export default App;
