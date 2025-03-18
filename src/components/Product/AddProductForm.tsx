import React, { useState } from "react";

interface Product {
  brand: string;
  name: string;
  price: number;
  specialPrice: number;
  description: string;
  enableQuantity: boolean;
  loyalty: boolean;
  sku: string;
}

interface AddProductFormProps {
  onAddProduct: (product: Product) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
  const [product, setProduct] = useState<Product>({
    brand: "",
    name: "",
    price: 0,
    specialPrice: 0,
    description: "",
    enableQuantity: false,
    loyalty: false,
    sku: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setProduct((prev) => ({ ...prev, [name]: checked }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      brand: "",
      name: "",
      price: 0,
      specialPrice: 0,
      description: "",
      enableQuantity: false,
      loyalty: false,
      sku: "",
    });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl w-full max-w-3xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Add a New Product/Service</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <select name="brand" value={product.brand} onChange={handleChange} className="border p-2 rounded w-full">
          <option value="">Select brand</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
        </select>
        <input type="text" name="name" placeholder="Product/Service Name" value={product.name} onChange={handleChange} className="border p-2 rounded w-full" />
        <input type="number" name="price" placeholder="Price (USD)" value={product.price} onChange={handleChange} className="border p-2 rounded w-full" />
        <input type="number" name="specialPrice" placeholder="Special Price (USD)" value={product.specialPrice} onChange={handleChange} className="border p-2 rounded w-full" />
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} className="border p-2 rounded col-span-2 w-full"></textarea>
        <div className="flex items-center space-x-3 col-span-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="enableQuantity" checked={product.enableQuantity} onChange={handleChange} className="h-5 w-5" />
            <span>Enable Quantity</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="loyalty" checked={product.loyalty} onChange={handleChange} className="h-5 w-5" />
            <span>Loyalty</span>
          </label>
        </div>
        <input type="text" name="sku" placeholder="SKU" value={product.sku} onChange={handleChange} className="border p-2 rounded col-span-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-2 hover:bg-blue-700 transition">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
