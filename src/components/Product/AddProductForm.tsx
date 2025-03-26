import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  specialPrice: number;
  description: string;
  enableQuantity: boolean;
  loyalty: boolean;
  sku: string;
  scheduled: boolean;
  views: number;
  booked: number;
  sequence: number;
  sales: number;
  status: boolean;
}

interface AddProductFormProps {
  onAddProduct: (product: Product) => void;
}

const AddProductForm = () => {
  const [product, setProduct] = useState<Product>({
    id: Date.now(),
    brand: "",
    name: "",
    price: 0,
    specialPrice: 0,
    description: "",
    enableQuantity: false,
    loyalty: false,
    sku: "",
    scheduled: false,
    views: 0,
    booked: 0,
    sequence: 0,
    sales: 0,
    status: false,
  });

  const location = useLocation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setProduct((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else if (type === "number") {
      setProduct((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onAddProduct(product);
    setProduct({
      id: Date.now(),
      brand: "",
      name: "",
      price: 0,
      specialPrice: 0,
      description: "",
      enableQuantity: false,
      loyalty: false,
      sku: "",
      scheduled: false,
      views: 0,
      booked: 0,
      sequence: 0,
      sales: 0,
      status: false,
    });
  };

  console.log(location?.state);
  const data = location?.state?.id;
  const [checked,setChecked] = useState(false);

  return (
      <>
        {/* <Outlet/> */}
        {/* <div className="contanier-fluids"> */}
  
        {/* </div> */}
        <div className="container-fluids">
          {/* <Sidebar />   */}
          <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t">
            <h2>Home Service - Product List</h2>
          </div>
          <main className="flex-1 p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">
                Add a new product/service
              </h2>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Brands</label>
                    <select className="w-full p-2 border rounded">
                      <option>Select brand</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Product/Service Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Product/Service Name"
                      value={data?.name || ""}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Price USD</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Price USD"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Special Price USD
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Special Price USD"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                      className="w-full p-2 border rounded"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="enable-quantity" />
                    <label className="text-gray-700">Enable Quantity</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* <input type="checkbox" id="loyalty"/> */}
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={checked}
                        onClick={()=>setChecked(!checked)}
  
                        // onChange={}
                      />
                      <span className="slider"></span>
                    </label>
                    {/* <label  className="text-gray-700">Loyalty</label> */}
                  </div>
                  <div>
                    <label className="block text-gray-700">SKU</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="SKU"
                    />
                  </div>
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              </form>
            </div>
          </main>
        </div>
      </>
    );
  };
  

export default AddProductForm;
