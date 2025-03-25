import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const AddColours = () => {
    const navigate = useNavigate();
    const [colorName, setColorName] = useState("");
    const [image, setImage] = useState<string | null>(null);
    // const [preview, setPreview] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setImage(URL.createObjectURL(file));
        }
      };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log("Color Name:", colorName);
        console.log("Uploaded Image:", image);
      };

    return (
       <>
       <Header />
       <div className="container-fluids">
       <div className="p-4 bg-white shadow-lg rounded-md max-w-4xl mx-auto mt-10">
      <div className="flex items-left bg-blue-500 text-white p-3 rounded-t">

        <h2 className="text-lg">Add new colour</h2>
      </div>

      <div className="p-5 flex">
        {/* Left: Form Input */}
        <div className="mb-4">
        <label className="block font-semibold mb-2">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

        {/* Right: Image Upload */}
        <div className="flex justify-center items-center h-screen">
      <div className="w-40 h-48 bg-white border shadow-lg rounded-md flex flex-col items-center justify-between overflow-hidden">
        {/* Image Preview */}
        <div className="w-full h-32 flex items-center justify-center bg-gray-100">
          {image ? (
            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
          ) : (
            <img src="/default-avatar.png" alt="Select the Photo" className="w-12 h-12 opacity-10" />
          )}
        </div>

        {/* Select Photo Button */}
        <label className="w-full bg-blue-500 text-white text-center py-2 cursor-pointer">
          Select Photo
          <input type="file" className="hidden" onChange={handleImageUpload} />
        </label>
      </div>
    </div>

      {/* Buttons */}
      <div className="p-4 flex justify-end space-x-3">
        <button onClick={() => navigate(-1)} className="bg-gray-400 text-white px-4 py-2 rounded">
          Cancel
        </button>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};
export default AddColours;