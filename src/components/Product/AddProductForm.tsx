import React, { useState } from "react";

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

const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setProduct((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (type === "number") {
      setProduct((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(product);
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

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl w-full max-w-3xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Add a New Product/Service</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Product ID (Read-Only) */}
        <input type="text" name="id" value={product.id} readOnly className="border p-3 rounded w-full bg-gray-100 mb-4" />

        {/* Brand Dropdown */}
        <select name="brand" value={product.brand} onChange={handleChange} className="border p-3 rounded w-full mb-4">
          <option value="">Select brand</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
        </select>

        {/* Product Name */}
        <input type="text" name="name" placeholder="Product/Service Name" value={product.name} onChange={handleChange} className="border p-3 rounded w-full mb-4" />

        {/* Price Fields */}
        <input type="number" name="price" placeholder="Price (USD)" value={product.price} onChange={handleChange} className="border p-3 rounded w-full mb-4" />
        <input type="number" name="specialPrice" placeholder="Special Price (USD)" value={product.specialPrice} onChange={handleChange} className="border p-3 rounded w-full mb-4" />

        {/* Description */}
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} className="border p-3 rounded col-span-2 w-full h-24 mb-4"></textarea>

        {/* Toggle Switches */}
        {[
          { label: "Enable Quantity", name: "enableQuantity", value: product.enableQuantity },
          { label: "Loyalty", name: "loyalty", value: product.loyalty },
          { label: "Scheduled", name: "scheduled", value: product.scheduled },
          { label: "Status", name: "status", value: product.status },
        ].map(({ label, name, value }) => (
          <div key={name} className="col-span-2 flex justify-between items-center p-3 bg-gray-100 rounded">
            <span>{label}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" name={name} checked={value} onChange={handleChange} className="sr-only peer" />
              <div className={`w-14 h-8 rounded-full transition-all ${value ? "bg-blue-600" : "bg-gray-300"}`}>
                <span className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-all ${value ? "translate-x-6" : ""}`}></span>
              </div>
              <span className="ml-3 text-gray-600">{value ? "ON" : "OFF"}</span>
            </label>
          </div>
        ))}

        {/* SKU */}
        <input type="text" name="sku" placeholder="SKU" value={product.sku} onChange={handleChange} className="border p-3 rounded col-span-2 w-full mb-4" />

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-2 hover:bg-blue-700 transition">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
