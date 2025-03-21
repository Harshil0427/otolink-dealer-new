import {useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import Varients from "./Varients";


const EditVehicle = () => {
  const location = useLocation();
  const vehicle = location.state?.vehicle || {};
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [model, setModel] = useState(vehicle.model || "");
  const [price, setPrice] = useState(vehicle.price || "");
  const [variants, setVariants] = useState(vehicle.variants || []);
  const navigate = useNavigate();

  const addVariant = () => {
    // setVariants([...variants, { id: variants.length + 1, name: "", price: "" }]);
    navigate('/home-service/products/add')
  };
  const [open,setOpen]=useState(false)

  return (
    <>
    <Header />
    <div className="container-fluids">
    <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t">
      <h2>Edit Model</h2>
    </div>
    {/* <Sidebar /> */}

    <div>

      <label>Brand</label>
      <input value={vehicle.brand} />

      <label>Model Name</label>
      <input value={model} onChange={(e) => setModel(e.target.value)} />

      <label>Price</label>
      <input value={price} onChange={(e) => setPrice(e.target.value)} />

      <h3>Variants</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Variant Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant:any, index:any) => (
            <tr key={index}>
              <td>{variant.id}</td>
              <td>
                <input
                  value={variant.name}
                  onChange={(e) => {
                    const updated = [...variants];
                    updated[index].name = e.target.value;
                    setVariants(updated);
                  }}
                />
              </td>
              <td>
                <input
                  value={variant.price}
                  onChange={(e) => {
                    const updated = [...variants];
                    updated[index].price = e.target.value;
                    setVariants(updated);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <button onClick={()=>setOpen(true)}>Add New Variant</button> */}
      
      <button onClick={()=>addVariant()}>Add New Variant</button>
      
      {open && <Varients/>}
    </div>
    </div>
    </>
  );
};

export default EditVehicle;
