import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import './AddVehicle.css';

interface VehicleFormData {
  brand: string;
  modelName: string;
  price: string;
  images: File[];
}


const brands = ["Hyundai", "Toyota", "Ford", "BMW", "Mercedes"];

const AddVehicle = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<VehicleFormData>();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const onSubmit = (data: VehicleFormData) => {
    console.log("Form Data:", data);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setSelectedImages(files);
      setValue("images", files); // Store in form data
    }
  };

  return (
    <>
    <Header />
    <div className="container-fluids">
    <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t">
        <Sidebar />
        <h2>Add New Vehicle</h2>
      </div>
    <div className="p-4 border rounded-lg shadow-lg bg-white max-w-lg">
      <h2 className="text-lg font-semibold text-blue-500 mb-4">➕ Add a new model</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Brand Dropdown */}
        <div>
          <label className="block text-sm font-medium">Brand</label>
          <select {...register("brand")} className="w-full border p-2 rounded">
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Model Name */}
        <div>
          <label className="block text-sm font-medium">Model name</label>
          <input
            {...register("modelName")}
            type="text"
            placeholder="Model name"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Price SAR</label>
          <input
            {...register("price")}
            type="text"
            placeholder="Price SAR"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
      <label className="block text-sm font-medium">Gallery Images</label>

      {/* Hidden File Input */}
      <input
        id="fileInput"
        type="file"
        multiple
        accept="image/png, image/jpeg"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Custom Upload Button (Click to Trigger Input) */}
      <div
        className="w-24 h-24 border-2 border-dashed flex items-center justify-center cursor-pointer rounded-lg text-3xl text-gray-500"
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        +
      </div>

      <p className="text-xs text-gray-500 mt-1">
        Hint: Supports PNG and JPG. Recommended Resolution: 1920x1080
      </p>

      {/* Preview Uploaded Images */}
      <div className="flex mt-2 space-x-2">
        {selectedImages.map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt="Uploaded"
            className="w-16 h-16 object-cover rounded border"
          />
        ))}
      </div>
    </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Add
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddVehicle;
